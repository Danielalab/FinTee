import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import QuestionIcon from '@material-ui/icons/QuestionAnswer';
import PersonIcon from '@material-ui/icons/PersonPin';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { MENTORING_PATH, LOGIN_PATH, SIGNUP_PATH, FAQ_PATH, ABOUT_PATH } from 'constants/paths'


const styles = () => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuIcon: {
    color : '#fff',
  }
});

function SwipeableTemporaryDrawer() {
  const classes = styles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  const sideList = (
    <div className={classes.list}>
      <List>
        <ListItem button component={Link} to={MENTORING_PATH}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary='Mentoring' />
        </ListItem>
        <ListItem button component={Link} to={SIGNUP_PATH}>
          <ListItemIcon><MoneyIcon /></ListItemIcon>
          <ListItemText primary='Financing' />
        </ListItem>
        <ListItem button component={Link} to={FAQ_PATH}>
          <ListItemIcon><QuestionIcon /></ListItemIcon>
          <ListItemText primary='FAQ' />
        </ListItem>
        <ListItem button component={Link} to={SIGNUP_PATH}>
          <ListItemIcon><MoneyIcon /></ListItemIcon>
          <ListItemText primary='Financing' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton
        className={classes.menuIcon}
        aria-label="open drawer"
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon style={{color: 'fff'}}/>
      </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer('left', false)}
          onKeyDown={toggleDrawer('left', false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
      );
    }

    export default withStyles(styles)(SwipeableTemporaryDrawer);
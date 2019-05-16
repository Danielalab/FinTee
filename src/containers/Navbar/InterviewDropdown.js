import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = (theme) => ({
//   // root: {
//   //   display: 'flex',
//   // },
//   paper: {
//     marginRight: 8 * 2,
//   },
// });

function MenuListComposition() {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorEl = React.useRef(null);

  function handleToggle() {
    setOpen(!open);
  }

  function handleClose(event) {
    if (anchorEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  return (
    // <div className={classes.root}>
      <div>
        <Button
          buttonRef={anchorEl}
          aria-owns={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
        INTERVIEW TYPES
        </Button>
        <Popper open={open} anchorEl={anchorEl.current} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              id="menu-list-grow"
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>Negociación salarial</MenuItem>
                    <MenuItem onClick={handleClose}>Cambio de trabajo</MenuItem>
                    <MenuItem onClick={handleClose}>Postular a un puesto más alto</MenuItem>
                    <MenuItem onClick={handleClose}>Exponer un proyecto</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    // </div>
  );
}

export default MenuListComposition;
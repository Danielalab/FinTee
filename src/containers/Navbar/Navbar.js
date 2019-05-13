import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { LIST_PATH } from 'constants/paths'
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'
import SwipeableTemporaryDrawer from './LeftDrawer';

function Navbar({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout,
  closeAccountMenu,
  anchorEl,
  handleMenu,
  classes
}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <SwipeableTemporaryDrawer />
        </div>
        <Typography
          variant="h6"
          color="inherit"
          className={classes.flex}
          component={Link}
          to={authExists ? LIST_PATH : '/'}>
          FINTEE
        </Typography>
        {authExists ? (
          <AccountMenu
            avatarUrl={avatarUrl}
            displayName={displayName}
            onLogoutClick={handleLogout}
            goToAccount={goToAccount}
            closeAccountMenu={closeAccountMenu}
            handleMenu={handleMenu}
            anchorEl={anchorEl}
          />
        ) : (
          <p>No sabemos here</p>
        )}
      </Toolbar>
    </AppBar>
  )
}

 // <LoginMenu />
Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  closeAccountMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  handleMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  anchorEl: PropTypes.object // from enhancer (withStateHandlers - handleMenu)
}

export default Navbar

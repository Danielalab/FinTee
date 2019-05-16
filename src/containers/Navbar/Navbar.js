import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
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
}) {
  return (
    <AppBar position="static">
      <Toolbar>
        <div>
          <SwipeableTemporaryDrawer />
        </div>
        <Typography
          className="title-logo"
          component={Link}
          to={authExists ? LIST_PATH : '/'}>
          <h2 className="text-center mb-2">
            <span className="title-logo">FinTee</span>
          </h2>
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
        ) : ( false )}
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

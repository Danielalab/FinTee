import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { LOGIN_PATH, SIGNUP_PATH, FAQ_PATH } from 'constants/paths'
import MenuListComposition from './InterviewDropdown'

const buttonStyle = {
  color: 'white',
  textDecoration: 'none',
  alignSelf: 'center'
}

function LoginMenu() {
  return (
    <div>
      <MenuListComposition />
      <Button style={buttonStyle} component={Link} to={FAQ_PATH}>
        FAQ
      </Button>
      <Button style={buttonStyle} component={Link} to={SIGNUP_PATH}>
        SIGN UP
      </Button>
      <Button style={buttonStyle} component={Link} to={LOGIN_PATH}>
        LOGIN
      </Button>
    </div>
  )
}

export default LoginMenu

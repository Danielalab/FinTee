import React from 'react'
import PropTypes from 'prop-types'
import ContentAddCircle from '@material-ui/icons/AddCircle'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const iconSize = '6rem'
const iconStyle = { width: iconSize, height: iconSize }
const styles =  theme => ({
  root: {
    ...theme.flexRowCenter,
    alignItems: 'center',
    cursor: 'pointer',
    height: '200px',
    width: '300px',
    margin: theme.spacing.unit * 0.5,
    padding: theme.spacing.unit * 1.3,
    overflow: 'hidden'
  }
})

function NewProjectTile({ onClick, classes }) {
  return (
    <Paper className={classes.root} onClick={onClick}>
      <ContentAddCircle style={iconStyle} />
    </Paper>
  )
}

NewProjectTile.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(NewProjectTile)

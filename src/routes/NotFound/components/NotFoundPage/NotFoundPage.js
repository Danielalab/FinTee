import React from 'react'
import PropTypes from 'prop-types'
import img from '../../../../static/error-404.png';

function NotFoundPage({ classes }) {
  return (
    <div className={classes.root}>
      <figure className="d-flex justify-content-center">
          <img src={img} className="img-fluid maxh-40vh" alt="error"></img>
        </figure>
      <h1>Whoops! 404!</h1>
      <p>This page was not found.</p>
    </div>
  )
}

NotFoundPage.propTypes = {
  classes: PropTypes.object // from enhancer (withStyles)
}

export default NotFoundPage

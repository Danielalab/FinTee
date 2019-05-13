import React from 'react';
import img from '../../../../static/networking.png';
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
  list: {
    width: 250,
  },
});

function MentoringPage() {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <div className="d-flex justify-content-center flex-column mt-2 mb-3">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={img} className="img-fluid maxh-40vh rounded-circle" alt="women"></img>
        </figure>
        <h2 className="text-center mb-2">
          <span className="title-logo">FinTee</span>
          <span className="title title-yellow"> + Mentoring</span>
        </h2>
        <p className="text-center">FinTee allows you to connect women entrepreneurs with a volunteer mentor depending
        on the skills you want to develop for your business.</p>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <button type="button" className="btn btn-success btn-lg btn-block">I'm a Mentor</button>
        <button type="button" className="btn btn-outline-success btn-lg btn-block">I'm a Mentee</button>
      </div>
    </section>
  )
}

export default withStyles(styles)(MentoringPage);
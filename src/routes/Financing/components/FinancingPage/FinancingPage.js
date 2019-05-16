import React from 'react';
import img from '../../../../static/money.png'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import { ENTREPRENEUR_PATH, FINTECH_PATH } from '../../../../constants/paths'
import Button from '@material-ui/core/Button'

const styles = () => ({
  button: {
    border: "3px solid #A64D78",
    color: "#333",
    margin: "3px",
    fontWeight: 700,
    cursor: 'pointer'
  }
});

function FinancingPage({ classes }) {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <div className="d-flex justify-content-center flex-column mt-2 mb-3">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={img} className="img-fluid maxh-40vh rounded-circle" alt="money"></img>
        </figure>
        <h2 className="text-center mb-2">
          <span className="title-logo">FinTee</span>
          <span className="title title-yellow"> + Fintechs</span>
        </h2>
        <p className="text-center">
          FinTee allows women entrepreneurs to find more affordable
          financing options and online through lending fintechs.
        </p>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <Button
          type="button"
          className={classes.button}
          component={Link} to={ENTREPRENEUR_PATH}
        >
          I'm a women entrepreneur
        </Button>
        <Button
          type="button"
          className={classes.button}
          component={Link} to={FINTECH_PATH}
        >
          I'm a Fintech
        </Button>
      </div>
    </section>
  )
}

export default withStyles(styles)(FinancingPage);
import React from 'react';
import img from '../../../../static/money.png'
import { Link } from 'react-router-dom'
import { ENTREPRENEUR_PATH } from '../../../../constants/paths'
import Button from '@material-ui/core/Button'

function FinancingPage() {
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
          className="btn btn-success btn-lg btn-block"
          component={Link} to={ENTREPRENEUR_PATH}
        >
          I'm a women entrepreneur
        </Button>
        <button
          type="button"
          className="btn btn-outline-success btn-lg btn-block"
        >
          I'm a Fintech
        </button>
      </div>
    </section>
  )
}

export default FinancingPage;
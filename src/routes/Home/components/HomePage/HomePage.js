import React from 'react'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'

import logo from '../../../../static/logo.png'

function Home() {
  return (
    <section className="d-flex justify-content-center flex-column mx-4 vh-80">
      <div className="d-flex justify-content-center flex-column">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={logo} className="img-fluid maxh-40vh rounded-circle" alt="fintee-logo"></img>
        </figure>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis enim blanditiis
          voluptatibus rem commodi dolorum maxime, modi adipisci! Iusto cum totam maxime?</p>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <button type="button" className="btn btn-primary btn-lg btn-block">Mentoring</button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Financing</button>
      </div>
    </section>
  )
}



export default Home;

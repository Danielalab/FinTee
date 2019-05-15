import React from 'react'
import { Link } from 'react-router-dom'
import {
  ACCOUNT_PATH,
  LIST_PATH,
  LOGIN_PATH,
  SIGNUP_PATH
} from 'constants/paths'

import logo from '../../../../static/logo.png'
// probando vistas
import MentoringPage from 'routes/Mentoring/components/MentoringPage/MentoringPage';
import MenteePage from 'routes/Mentoring/components/MentoringPage/menteePage/MenteePage';
import MentorPage from 'routes/Mentoring/components/MentoringPage/mentorPage/MentorPage';
import FinancingPage from 'routes/Financing/components/FinancingPage/FinancingPage';

function Home() {
  return (
    <section className="d-flex justify-content-center flex-column m-4">
      <div className="d-flex justify-content-center flex-column mt-2 mb-3">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={logo} className="img-fluid maxh-40vh rounded-circle" alt="women"></img>
        </figure>
        <p className="text-center">
          It is a platform that allows women entrepreneurs (SMEs)
          to connect with mentors from different fields to enhance their technical and soft skills,
          in addition to connecting them with fintechs from the region to access credit in
          a 100% digital experience.
        </p>
      </div>
      <div className="d-flex justify-content-center flex-column">
        <button type="button" className="btn btn-next btn-lg btn-block">Mentoring</button>
        <button type="button" className="btn btn-next btn-lg btn-block">Financing</button>
      </div>
    </section>
  )
}



export default Home;

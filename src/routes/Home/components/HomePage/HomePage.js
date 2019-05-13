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
import MentoringPage from 'routes/Mentoring/components/MentoringPage';
import MenteePage from 'routes/Mentoring/components/menteePage/MenteePage';
import MentorPage from 'routes/Mentoring/components/mentorPage/MentorPage';
import FinancingPage from 'routes/Financing/FinancingPage';

function Home() {
  return (

    <FinancingPage />
    // <MentorPage />
    // <MenteePage />
    // <MentoringPage />
  )
}



export default Home;

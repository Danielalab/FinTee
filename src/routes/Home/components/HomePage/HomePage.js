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
  return (<p>AQUI VA HOME</p>
    // <FinancingPage />
    // <MentorPage />
    // <MenteePage />
    // <MentoringPage />
  )
}



export default Home;

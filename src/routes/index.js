import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import LoginRoute from './Login'
import SignupRoute from './Signup'
import FaqRoute from './Faq'
import ProjectsRoute from './Projects'
import AccountRoute from './Account'
import MentoringRoute from './Mentoring'
import MentorRoute from './Mentor'
import MentorListRoute from './MentorList'
import MenteeRoute from './Mentee'
import MenteeListRoute from './MenteeList'
import FinancingRoute from './Financing'
import EntrepreneurRoute from './Entrepreneur'
import NotFoundRoute from './NotFound'

export default function createRoutes(store) {
  return (
    <CoreLayout>
      <Switch>
        <Route exact path={Home.path} component={Home.component} />
        {/* Build Route components from routeSettings */
        [
          AccountRoute,
          ProjectsRoute,
          FaqRoute,
          SignupRoute,
          LoginRoute,
          MentoringRoute,
          FinancingRoute,
          EntrepreneurRoute,
          MentorRoute,
          MentorListRoute,
          MenteeRoute,
          MenteeListRoute
          /* Add More Routes Here */
        ].map((settings, index) => (
          <Route key={`Route-${index}`} {...settings} />
        ))}
        <Route component={NotFoundRoute.component} />
      </Switch>
    </CoreLayout>
  )
}

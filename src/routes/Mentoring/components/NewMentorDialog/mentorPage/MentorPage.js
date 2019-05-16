import React from 'react';
import { skillsMentoring } from '../menteePage/MenteePage'
import { renderChildren } from 'utils/router'
import { Route, Switch } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase'
import MentorRoute from 'routes/Mentoring/routes/Mentor'
// import MenteeRoute from 'routes/Mentoring/routes/Mentee'
// export const MENTOR_PATH = '/mentoring/mentor'
// export const MENTEE_PATH = '/mentoring/mentee'

function MentorPage() {
  return(
    <Switch>
      {/* Child routes */}
      {renderChildren([MentorRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <section className="p-4">
            <h3 className="title">Mentor</h3>
            <p>Complete the fields to find a mentee</p>
            <form className="form" name="formLogin" role="form">
              <div className="form-row">
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="First name" />
                </div>
                <div className="form-group col">
                  <input type="text" className="form-control" placeholder="Last name" />
                </div>
              </div>
              <div className="form-group">
                <input className="form-control" id="email-mentor" name="email-mentor" type="email"
                  placeholder="Email"/>
              </div>
              <div class="form-group">
                <select id="country" class="form-control">
                  <option selected>Select your country</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group">
                <input className="form-control" id="business-name" name="company-name" type="text"
                  placeholder="Company Name"/>
              </div>
              <div className="form-group">
                <input className="form-control" id="business-name" name="business-name" type="text"
                  placeholder="Linkedin URL"/>
              </div>
              <div className="form-group mb-3">
                <p>Select the skills you would like to develop with your mentee:</p>
                <div className="custom-control custom-checkbox">
                  {
                    skillsMentoring.map((skill) => {
                      return(
                      <div key={skill.id}>
                        <input type="checkbox" className="custom-control-input" id={skill.id}/>
                        <label className="custom-control-label" htmlFor={skill.id}>Check this custom checkbox</label>
                      </div>)
                    })
                  }
                </div>
              </div>
              <button type="button" className="btn btn-success btn-lg btn-block my-3">Find a Mentee</button>
            </form>
          </section>
          )}
        />
    </Switch>
  )
}

export default MentorPage;
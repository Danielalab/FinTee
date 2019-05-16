import React from 'react';
import { skillsMentoring, areas} from '../utils.js'
import { countries } from 'countries-apec.js';

function MentorPage() {
  return(
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
            { countries.map(country => <option key={country.id}>{ country.name }</option>) }
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="business-name" type="text"
            placeholder="Linkedin URL"/>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="company-name" type="text"
            placeholder="Company Name"/>
        </div>
        <div class="form-group">
          <select id="areas" class="form-control">
            <option selected>Select the industry in which you would like to advise.</option>
            { areas.map(area => <option key={area.id}>{ area.name }</option>) }
          </select>
        </div>
        <div className="form-group mb-3">
          <p>Select the skills you would like to develop with your mentee:</p>
          <div className="custom-control custom-checkbox">
            {
              skillsMentoring.map((skill) => {
                return(
                <div key={skill.id}>
                  <input type="checkbox" className="custom-control-input" id={skill.id}/>
                  <label className="custom-control-label" htmlFor={skill.id}>{skill.nameSkill}</label>
                </div>)
              })
            }
          </div>
        </div>
        <button type="button" className="btn btn-success btn-lg btn-block my-3">Find a Mentee</button>
      </form>
    </section>
  )
}

export default MentorPage;
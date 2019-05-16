import React from 'react';
import { skillsMentoring, areas } from "../../../Mentoring/utils.js";
import { countries } from 'countries-apec.js';
import { Link } from 'react-router-dom';
import { MENTORLIST_PATH } from '../../../../constants/paths'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    border: "3px solid #A64D78",
    color: "#333",
    margin: "3px",
    fontWeight: 700,
    cursor: 'pointer'
  }
});

function MenteePage({ classes }) {
  return(
    <section className="p-4">
      <h3 className="title">Mentee</h3>
      <p>Complete the fields to find a mentor</p>
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
        <div className="form-group">
          <select id="country" className="form-control">
            <option selected>Select your country</option>
            { countries.map(country => <option key={country.id}>{ country.name }</option>) }
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="business-name" type="text"
            placeholder="Linkedin URL"/>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="business-name" type="text"
            placeholder="Business Name"/>
        </div>
        <div className="form-group">
          <select id="country" className="form-control">
            <option selected>Select your industry</option>
            { areas.map(area => <option key={area.id}>{ area.name }</option>) }
          </select>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            placeholder="Business Description"></textarea>
        </div>
        <div className="form-group mb-3">
          <p>Select the skills you want to develop:</p>
          <div className="custom-control custom-checkbox">
            {
              skillsMentoring.map((skill) => {
                return(
                <div key={skill.id}>
                  <input type="checkbox" className="custom-control-input" id={skill.id}/>
                  <label className="custom-control-label" htmlFor={skill.id}>{ skill.nameSkill }</label>
                </div>)
              })
            }
          </div>
        </div>
        <div className="form-group mb-3 text-center">
          <Button
            type="button"
            className={classes.button}
            component={Link} to={MENTORLIST_PATH}
          >
            Find a Mentor
          </Button>
        </div>
      </form>
    </section>
  )
}

export default withStyles(styles)(MenteePage);
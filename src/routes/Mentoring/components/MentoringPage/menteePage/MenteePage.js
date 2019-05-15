import React from 'react';

export const skillsMentoring = [
  {
    nameSkill: 'Administration',
    id: '1',
  },
  {
    nameSkill: 'Accounting and Finance',
    id: '2',
  },
  {
    nameSkill: 'Sales',
    id: '3',
  },
  {
    nameSkill: 'Sustainability',
    id: '4',
  },
  {
    nameSkill: 'Financial planning',
    id: '5',
  },
  {
    nameSkill: 'Leadership and communication',
    id: '6',
  },
  {
    nameSkill: 'Public speaking',
    id: '7',
  }
]

function MenteePage() {
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
            <option>...</option>
          </select>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="business-name" type="text"
            placeholder="Business Name"/>
        </div>
        <div className="form-group">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
            placeholder="Business Description"></textarea>
        </div>
        <div className="form-group">
          <input className="form-control" id="business-name" name="business-name" type="text"
            placeholder="Linkedin URL"/>
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
        <button type="button" className="btn btn-success btn-lg btn-block my-3">Find a Mentor</button>
      </form>
    </section>
  )
}

export default MenteePage;
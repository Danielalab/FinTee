import React from 'react';
import { mentorsList } from '../../../Mentoring/utils';

function MentorItem(mentorData) {
  return(
    <li>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ mentorData.name }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ mentorData.job }</h6>
          <p>Skills you would like to advise: {mentorData.skills.join(', ')}</p>
          <div>
            <button type="button" className="btn btn-success">Contact</button>
          </div>
        </div>
      </div>
    </li>
  )
}

function MentorListPage () {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Congratulations! your registration has been a success. <br/>
        We show you all the mentors who made a match with you so that you can start
        promoting your business.
      </p>
      <ul>
        { mentorsList.map(mentor => MentorItem(mentor)) }
      </ul>
    </section>
  )
}

export default MentorListPage;
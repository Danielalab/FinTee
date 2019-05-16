import React from 'react';
import { menteesList } from '../MentoringPage/utils';

function MenteeItem(MenteeData) {
  return(
    <li>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{ MenteeData.name }</h5>
          <h6 class="card-subtitle mb-2 text-muted">{ MenteeData.job }</h6>
          <p>Skills you would like to advise: {MenteeData.skills.join(', ')}</p>
          <div>
            <button type="button" class="btn btn-success">Contact</button>
          </div>
        </div>
      </div> 
    </li>
  )
}

function MenteesList () {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Congratulations! your registration has been a success. <br/>
        We show you all the Mentees who made a match with you so that you can start
        promoting your business.
      </p>
      <ul>
        { menteesList.map(Mentee => MenteeItem(Mentee)) }
      </ul>
    </section>
  )
}

export default MenteesList;
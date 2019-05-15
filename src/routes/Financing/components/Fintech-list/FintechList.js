import React from 'react';
import img from '../../../../static/money.png'

function FintechsList() {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Welcome, we will show you different fintechs in your country so you 
        can choose the one that best suits your needs.
      </p>
      <form className="form" name="formLogin" role="form">
        <div className="form-group">
          <select id="country" className="form-control">
            <option selected>Select your country</option>
          </select>
        </div>
      </form>
      <ul>
        <li>lista de fintechs</li>
      </ul>
    </section>
  )
}

export default FintechsList;
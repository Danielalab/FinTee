import React from 'react';
import { countries } from 'countries-apec';

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
            { countries.map(country => <option key={country.id}>{ country.name }</option>) }
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
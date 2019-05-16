import React from 'react';
import { countries } from 'countries-apec';
import { fintechsList } from 'routes/Financing/fintechs';

function EntrepreneurPage () {
  let data = fintechsList;
  const handleSelectCountry = (countryName) => {
    data = fintechsList.filter((fintech) => fintech.country === countryName)
    console.log(data);
  }

  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Welcome, we will show you different fintechs in your country so you
        can choose the one that best suits your needs.
      </p>
      <form className="form" name="formLogin" role="form">
        <div className="form-group">
          <select onChange={(e) => { handleSelectCountry(e.target.value) }} id="country" className="form-control">
            <option selected value="select">Select your country</option>
            { countries.map(country => <option key={country.id}  value={country.name}>{ country.name }</option>) }
          </select>
        </div>
      </form>
      { data ? 'hola' : '' }
      <ul>
        <li>lista de fintechs</li>
      </ul>
    </section>
  )
}

export default EntrepreneurPage;
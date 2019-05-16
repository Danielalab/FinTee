import React from 'react';
import { countries } from 'countries-apec';
import { fintechsList } from 'routes/Financing/fintechs';

function FintechItem(fintechData) {
  return(
    <div class="card" style="width: 18rem;">
      <img src={ fintechData.img } class="card-img-top" alt={ fintechData.nameFintech } />
      <div class="card-body">
        <h5 class="card-title">{ fintechData.nameFintech }</h5>
        <a href={ fintechData.webURL } class="btn btn-success">Ask for a loan</a>
      </div>
    </div>
  )
}

function EntrepreneurPage () {
  let data = [];
  const handleSelectCountry = (countryName) => {
    data = [];
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
      { data
        ? (<ul>
          { data.map(fintech => FintechItem(fintech)) }
        </ul>)
        : null
      }
    </section>
  )
}

export default EntrepreneurPage;
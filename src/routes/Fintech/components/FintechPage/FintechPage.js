import React from 'react';
import { countries } from 'countries-apec';
import { businessList } from 'routes/Financing/fintechs';

function BusinessItem(businessData) {
  return(
    <div class="card" style="width: 18rem;">
      <img src={ businessData.img } class="card-img-top" alt={ businessData.name } />
      <div class="card-body">
        <h5 class="card-title">{ businessData.name }</h5>
        <p>{ businessData.amount }</p>
        <p>{ businessData.reason }</p>
        <a href={ businessData.linkedin } class="btn btn-success">Send offer</a>
      </div>
    </div>
  )
}

function FintechPage () {
  let data = [];
  const handleSelectCountry = (countryName) => {
    data = [];
    data = businessList.filter((business) => business.country === countryName)
    console.log(data);
  }

  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Welcome, we will show you different fintechs in your country so
        that you can choose the loan that best suits your needs.
      </p>
      <form className="form" name="formLogin" role="form">
        <div className="form-group">
          <select onChange={(e) => { handleSelectCountry(e.target.value) }} id="country" className="form-control">
            <option selected value="select">Select your country</option>
            { countries.map(country => <option key={country.id}  value={country.name}>{ country.name }</option>) }
          </select>
        </div>
      </form>
      { data ?
        <ul>
          { data.map(business => BusinessItem(business)) }
        </ul>
        : null }
    </section>
  )
}

export default FintechPage;
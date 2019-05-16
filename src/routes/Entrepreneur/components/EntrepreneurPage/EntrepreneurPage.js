import React from 'react';
import { countries } from 'countries-apec';

class EntrepreneurPage extends React.Component() {
  state = {
    error: null,
    data: undefined,
  };

  fetchData = async (countryName) => {
    this.setState({ data: null, error: null });

    try {
      let data = await fetch('../../../../../fintech.json');
      data = data.filter(fintech => fintech.country === countryName)
      this.setState({ data: data });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  handleSelectCountry = (country) => {
    console.log(country);
    
    // this.fetchData(country);
  }

  render() {
    return(
      <section className="d-flex justify-content-center flex-column m-4">
        <p className="text-center">
          Welcome, we will show you different fintechs in your country so you
          can choose the one that best suits your needs.
        </p>
        <form className="form" name="formLogin" role="form">
          <div className="form-group">
            <select onChange={(e) => { this.handleSelectCountry(e.target.value) }} id="country" className="form-control">
              <option selected >Select your country</option>
              { countries.map(country => <option key={country.id}  value={country.name}>{ country.name }</option>) }
            </select>
          </div>
        </form>
        { this.state.data ? 'hola' : '' }
        <ul>
          <li>lista de fintechs</li>
        </ul>
      </section>
    )
  }
}

export default EntrepreneurPage;
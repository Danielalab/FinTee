import React from 'react';
import { countries } from 'countries-apec';
import { fintechsList } from 'routes/Financing/fintechs';

function FintechItem(fintechData) {
  return(
    <div className="card">
      <img src={ fintechData.img } className="img-fluid min-heigth-img" alt={ fintechData.nameFintech } />
      <div className="card-body">
        <h5 className="card-title">{ fintechData.nameFintech }</h5>
        <div className="text-center">
          <a href={ fintechData.webURL } className="btn btn-success">Ask for a loan</a>
        </div>
      </div>
    </div>
  )
}

class FintechsListComponent extends React.Component {
  state = {
    data: []
  }
  handleSelectCountry = (countryName) => {
    this.setState({ data: [] })
    const dataCountry = fintechsList.filter((fintech) => fintech.country === countryName)
    this.setState({ data: dataCountry })
  }
  render() {
    return(
      <div>
        <form className="form" name="formLogin" role="form">
          <div className="form-group">
            <select onChange={(e) => { this.handleSelectCountry(e.target.value) }} id="country" className="form-control">
              <option selected value="select">Select your country</option>
              { countries.map(country => <option key={country.id}  value={country.name}>{ country.name }</option>) }
            </select>
          </div>
        </form>
        <ul>
          { this.state.data.map(fintech => {
            return (
              <li className="my-2" key={ fintech.id }>
                {FintechItem(fintech)}
              </li>
            )
          }) }
        </ul>  
      </div>
    )
  }
}

export default FintechsListComponent;
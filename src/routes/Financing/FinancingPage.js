import React from 'react';
import img from '../../static/money.png'

function FinancingPage() {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <div className="d-flex justify-content-center flex-column mt-2 mb-3">
        <figure className="d-flex justify-content-center rounded-circle">
          <img src={img} className="img-fluid maxh-40vh rounded-circle" alt="women"></img>
        </figure>
        <h2 className="text-center mb-2">
          <span className="title-logo">FinTee</span>
          <span className="title title-green"> + Fintechs</span>
        </h2>
        <p className="text-center">FinTee allows you to connect women entrepreneurs with 
        fintech from the region so they can access loans online.</p>
      </div>
    </section>
  )
}

export default FinancingPage;
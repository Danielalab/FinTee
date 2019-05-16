import React from 'react';
import FintechsListComponent from './fintechsListComponent';

function EntrepreneurPage () {
  return(
    <section className="d-flex justify-content-center flex-column m-4">
      <p className="text-center">
        Welcome, we will show you different fintechs in your country so you
        can choose the one that best suits your needs.
      </p>
      <FintechsListComponent/>
    </section>
  )
}

export default EntrepreneurPage;
import React from 'react';

import logo from '../logo512.png';

const Home = () => {
   return (
      <div>
         <img className='logo-main' src={logo} alt='Relaxer Minder Logo' />
         <h1 className='logo-title'>Relaxer Mind</h1>
         <p className='content-homepage'>
            Una semplice PWA per aiutarti a rilassarti nei momenti di stress,
            <br />
            <br />
            Prendere veloci Note,
            <br />
            <br />O avere una citazione motivazionale da un personaggio famoso.
         </p>
         <div
            className='ui floating black message'
            style={{ marginTop: '9rem', marginBottom: '3rem', textAlign: 'center' }}>
            <div className='header'>Relaxer Mind è attualmente in Beta!</div> <br />
            Alcune funzionalità potrebbero ancora non funzionare appieno o risultare mancanti.
            <br />
            Vi è la previsione di rendere l'App pienamente fruibile in poco tempo.
         </div>
      </div>
   );
};

export default Home;

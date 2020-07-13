import React from 'react';

const QuotationHeader = () => {
   return (
      <div>
         <h1 className='ui center aligned icon header'>
            <br />
            <i className='circular star icon'></i>
            <br />
            <div className='content'>
               Quotations
               <div className='sub header'>
                  <br />
                  Prendi spunto da citazioni di personaggi famosi per la tua giornata.
                  <br />
                  <br />
                  Premi il pulsante e ottieni una citazione casuale!
               </div>
            </div>
            <br /> <br />
         </h1>
      </div>
   );
};

export default React.memo(QuotationHeader);

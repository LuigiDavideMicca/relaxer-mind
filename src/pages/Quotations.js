import React, { useState } from 'react';

import QuotationsHeader from '../components/Quotations/QuotationHeader';
import { main_quotations } from '../components/Quotations/Quotationlist';

const Quotations = () => {
   const [quotations] = useState(main_quotations);
   const [quote, setQuote] = useState({});

   const getRandomQuote = () => {
      const limit = quotations.length;
      setQuote(quotations[Math.floor(Math.random() * limit)]);
   };
   return (
      <>
         <QuotationsHeader />
         <button className='ui fluid instagram button' onClick={() => getRandomQuote()}>
            <i className='box icon'></i>
            SCOPRI UNA CITAZIONE
         </button>
         <div className='container-p'>
            {quote.id ? (
               <div className='ui card' style={{ padding: '2rem' }}>
                  <div className='content'>
                     <div className='header'> {quote.author}</div>
                  </div>
                  <div className='description'>
                     <p>
                        <i>{quote.text}</i>
                     </p>
                  </div>
               </div>
            ) : (
               ''
            )}
         </div>
      </>
   );
};

export default Quotations;

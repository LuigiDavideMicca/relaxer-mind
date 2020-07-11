import React from 'react';

const QuickNoteHeader = () => {
   return (
      <div>
         <h1 className='ui center aligned icon header'>
            <br />
            <i className='circular file alternate icon'></i>
            <br />
            <div className='content'>
               Quick Note
               <div className='sub header'>
                  <br />
                  Prendi qualche appunto veloce quando ti prende l'ispirazione!
                  <br />
                  <br />
                  Potrai sempre cancellarle in ogni momento.
               </div>
            </div>
            <br /> <br />
         </h1>
      </div>
   );
};

export default QuickNoteHeader;

import React from 'react';

const Timer = ({ percentage, minutes, seconds }) => {
   let text, attribute;
   if (percentage === 100) {
      text = 'TEMPO DEL RELAX FINITO!';
      attribute = '#00524c';
   } else if (percentage > 50 && percentage <= 75) {
      text = `${percentage}%`;
      attribute = '#00867d';
   } else if (percentage >= 25 && percentage <= 50) {
      text = `${percentage}%`;
      attribute = '#4db6ac';
   } else if (percentage > 75) {
      text = `${percentage}%`;
      attribute = '#006d66';
   } else {
      text = `${percentage}%`;
      attribute = '#82e9de';
   }

   let countdown;
   if (minutes === 0 && seconds === 0) {
      countdown = <h4 className='ui center aligned icon header'>Tempo del Relax Scaduto!</h4>;
   } else {
      countdown = (
         <>
            <div className='countdown-item'>
               {minutes}
               <span>minuti</span>
            </div>
            <div className='countdown-item'>
               {seconds}
               <span>secondi</span>
            </div>
         </>
      );
   }

   return (
      <div>
         <div style={{ textAlign: 'center' }} className='ui big teal progress'>
            <div
               className='bar'
               style={{
                  minWidth: `${percentage}%`,
                  backgroundColor: `${attribute}`,
                  transition: '0.750s linear',
               }}></div>
         </div>
         <div style={{ marginBottom: '4rem' }} className='ui primary center aligned header'>
            <span>{text}</span>
         </div>
         <div>
            <h2 className='ui center aligned header'>Tempo Rimanente:</h2>
            <div className='countdown-wrapper'>{countdown}</div>
         </div>
      </div>
   );
};

export default Timer;

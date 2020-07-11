import React, { useState } from 'react';

const TimerForm = ({ minutes, seconds, onFormSubmit }) => {
   const [min, setMinutes] = useState(minutes);
   const [sec, setSeconds] = useState(seconds);
   const [form, showForm] = useState(false);

   const onMinuteschange = e => {
      setMinutes(e.target.value);
   };

   const onSecondschange = e => {
      setSeconds(e.target.value);
   };

   const onTimerFormSubmit = e => {
      e.preventDefault();
      onFormSubmit(min, sec);
      showForm(!form);
   };

   return form === false ? (
      <button
         style={{ marginBottom: '5rem' }}
         className='ui basic button orange buttony'
         onClick={() => showForm(!form)}>
         Cambia il tempo di Relax
      </button>
   ) : (
      <div>
         <button className='ui basic button orange buttony' onClick={() => showForm(!form)}>
            Cambia il tempo di Relax
         </button>
         <form
            style={{ marginTop: '5rem', marginBottom: '5rem' }}
            onSubmit={onTimerFormSubmit}
            className='ui form'>
            <div className='field'>
               <label>Minuti</label>
               <input
                  type='text'
                  name='first-name'
                  value={min}
                  onChange={onMinuteschange}
                  placeholder={`${min} minuti`}
               />
            </div>
            <div className='field'>
               <label>Secondi</label>
               <input
                  type='text'
                  name='last-name'
                  value={sec}
                  onChange={onSecondschange}
                  placeholder={`${sec} secondi`}
               />
            </div>
            <button style={{ marginTop: '1.5rem' }} className='ui basic button red' type='submit'>
               Imposta il nuovo tempo
            </button>
         </form>
      </div>
   );
};

export default TimerForm;

import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo192.png';

const Sidebar = () => {
   const [visible, setVisible] = useState('');
   const ref = useRef(null);

   const toggleVisibility = () => {
      setVisible('visible');
   };

   const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
         setVisible('');
      }
   };

   useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
         document.removeEventListener('click', handleClickOutside, true);
      };
   });
   return (
      <>
         <button
            className='ui icon blue large button mobile-only'
            onClick={() => toggleVisibility()}>
            <i className='bars icon'></i>
         </button>
         <div
            ref={ref}
            className={`ui left ${visible}  vertical inverted sidebar labeled menu icon`}
            style={{ transition: '0.20s ease-in' }}>
            <img className='nav-logo' src={logo} alt='relaxer mind logo' />
            <NavLink to='/' exact className='item' activeClassName='active blue'>
               <i className='home icon'></i>
               Home
            </NavLink>
            <NavLink to='/relax-timer' exact className='item' activeClassName='active blue'>
               <i className='circular bath icon'></i>
               Relax Timer
            </NavLink>
            <NavLink to='/quick-notes' exact className='item' activeClassName='active blue'>
               <i className='circular file alternate icon'></i>
               Quick Notes
            </NavLink>
            <NavLink to='/quotations' exact className='item' activeClassName='active blue'>
               <i className='circular star icon'></i>
               Quotations
            </NavLink>
         </div>
      </>
   );
};

export default Sidebar;

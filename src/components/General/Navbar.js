import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../logo192.png';
import Sidebar from './Sidebar';

const Navbar = () => {
   return (
      <div className='ui inverted segment'>
         <div className='ui inverted mobile hidden secondary pointing menu'>
            <NavLink to='/' exact className='item' activeClassName='active blue'>
               Home
            </NavLink>
            <NavLink to='/relax-timer' exact className='item' activeClassName='active blue'>
               Relax Timer
            </NavLink>
            <NavLink to='/quick-notes' exact className='item' activeClassName='active blue'>
               Quick Notes
            </NavLink>
            <NavLink to='/quotations' exact className='item' activeClassName='active blue'>
               Quotations
            </NavLink>
            <div className='right menu'>
               <span className='ui item'>
                  <img className='nav-logo' src={logo} alt='relaxer mind logo' />
               </span>
            </div>
         </div>
         <Sidebar />
      </div>
   );
};

export default Navbar;

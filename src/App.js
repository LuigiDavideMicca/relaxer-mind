import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import RelaxTimer from './pages/RelaxerTimer';
import QuickNotes from './pages/QuickNotes';
import Quotations from './pages/Quotations';
import Navabar from './components/General/Navbar';

const App = () => {
   return (
      <div className='pusher'>
         <BrowserRouter>
            <Navabar />
            <div className='ui container'>
               <Route path='/' exact component={Home} />
               <Route path='/relax-timer' exact component={RelaxTimer} />
               <Route path='/quick-notes' exact component={QuickNotes} />
               <Route path='/quotations' exact component={Quotations} />
            </div>
         </BrowserRouter>
      </div>
   );
};

export default App;

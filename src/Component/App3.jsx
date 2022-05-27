/* import React from "react";
import {BrowserRouter as Router, Route,Routes,Link} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

import Menu from './Menu';

const App3 = () => {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} /> 
      </Routes>
    /*</>
  );
};

export default App3;*/



import React from 'react';
import About from './About';
import Contact from './Contact';


const App3=()=>{
  return(
    <>
      <nav>
        <ul>
          <li><a href='/' /> About </li>
          <li> <a href='/contact' /> Contact </li>
        </ul>
      </nav>
    </>
  )
}

export default App3;
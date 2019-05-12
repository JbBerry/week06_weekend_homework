import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return(
    <>
      <Link to="/">Play</Link>
      <Link to="/help">Help</Link>
    </>
  )
}

export default NavBar;

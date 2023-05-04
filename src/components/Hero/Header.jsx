import React, { useState } from 'react';
import './Header.css';
import Logo4 from '../../assets/logo4.png';


const Header = () => {
  const [setMenuOpened] = useState(true)
  return (
    <div className="header">
      <img src={Logo4} alt=""  className='logo'/>

      <ul className='headermenu'>
        <li onClick={()=>setMenuOpened(true)}>Home</li>
        <li onClick={()=>setMenuOpened(true)}>Program</li>
        <li onClick={()=>setMenuOpened(true)}>Why us</li>
        <li onClick={()=>setMenuOpened(true)}>Plans</li>
        <li onClick={()=>setMenuOpened(true)}>Testimonials</li>
      </ul>
    </div>
  );
};

export default Header;
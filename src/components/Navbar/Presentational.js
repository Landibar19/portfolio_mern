import React from 'react';
import './Styles.scss';
import logo from '../../assets/kevinRushLogo.png';
import {FaLinkedin, FaGithub,FaTwitterSquare,FaInstagram} from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='navbar_container'>
        <div className='navbar_logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='navbar_icons'>
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare />
            <FaInstagram />
        </div>
      
    </nav>
  )
}

export default Navbar

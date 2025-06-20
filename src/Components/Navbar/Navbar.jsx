import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo_1.png'
import menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
const Navbar = () => {
  const [sticky,setSticky]=useState(false);
   
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [moblieMenu,setMoblieMenu]=useState(false);
  const toggleMenu=()=>{
    moblieMenu?setMoblieMenu(false):setMoblieMenu(true);
  };
  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img className='logo' src={logo} alt="" />
        
        <ul className={`${moblieMenu?'moblie-menu':''} `}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to="program" smooth={true} offset={-100} duration={500}>Program</Link> </li>
            <li><Link to="about" smooth={true} offset={-95} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-200} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-200} duration={500}>Testimonials</Link></li>    
            <li><Link to="contact" smooth={true} offset={-200} duration={500}><button className='btn btn-min'>Contact us</button></Link></li>
        </ul>
        <img src={menu} alt="" className="menu"  onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
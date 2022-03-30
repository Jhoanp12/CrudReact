import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../style/header.css'



const Header = () => {
  return (
    <>
    <ul className='header--menu'>
            <Link to="/home"><li>Home</li></Link>
            <Link to="/citas"><li>Citas</li></Link>
            <Link to="/veterinarios"><li>Veterinarios</li></Link>
    </ul>
    
    </>
  )
}

export default Header
import React from 'react'
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
        <h1 id='h1' className='container-fluid bg-primary text-center py-3'>First React Website</h1>
        <ul id='ul'>
            <li className='li'><Link className='li' to={'/home'}>Home</Link></li>
            <li className='li'><Link className='li' to={'/about'}>About</Link></li>
            <li className='li'><Link className='li' to={'/todo'}>ToDo List</Link></li>
            <li className='li'><Link className='li' to={'/randomapp'}>Random P-Generate</Link></li>
            <li className='li'><Link className='li' to={'/weather'}>Weather</Link></li>
            <li className='li'><Link className='li' to={'/contact'}>Contact Us</Link></li>
            <li className='li'><Link className='li' to={'/blogs'}>Blogs</Link></li>


        </ul>
    </div>
  )
}

export default Header
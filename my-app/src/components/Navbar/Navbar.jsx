import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={require("../images/navbarLogo.png")} alt="navbar"/>
            <h3>my travel journal.</h3>
        </div>
    )
}
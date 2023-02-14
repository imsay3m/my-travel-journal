import React from 'react';
import './navbar.scss';
import logo from '../../assets/image/travel-logo.svg';

function Navbar() {
    return (
        <>
            <nav className='container navbar'>
                <div className='navbar__left'>
                    <img className='navbar__logo--img' src={logo} alt="My Travel Journal" />
                </div>
                <div className='navbar__right'>
                    <h3 className='navbar__logo--text'>my travel journal.</h3>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
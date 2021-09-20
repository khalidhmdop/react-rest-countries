import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/contact">Contact</a>
                <a href="/about">About</a>
            </nav>
            <p className="text-name">Khalid Hasan Khalid Hasan Khalid Hasan</p>
        </div>
    );
};

export default Header;
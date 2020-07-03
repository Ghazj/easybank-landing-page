import React from 'react';
import logo from '../../assets/images/svg/logo.svg';
import './logo.css'

function Logo() {
    return (
        <div className="logo">
            <img alt="" src={logo} id='logo' />
        </div>
    )
};

export default Logo;
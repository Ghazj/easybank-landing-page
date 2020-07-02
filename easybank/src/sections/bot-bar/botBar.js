import React from 'react';
import './styles.css';
import Logo from '../../global-components/logo/logo.js';
import Socials from './components/socials.js';
import Links from './components/links.js';
import RequestButton from '../../global-components/request-button/requestButton.js';

function BotBar() {
    return (
        <div id="botBar">
            <div className="col1">
                <Logo />
                <Socials />
            </div>
            <div className="col2">
                <Links />
            </div>
            <div className="col3">
                <RequestButton />
                <p className="copyright">c Easybank. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default BotBar;
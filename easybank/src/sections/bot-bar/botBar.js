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
                <p className="copyright">© Easybank. All Rights Reserved</p>
                <p className="copyright">Challenge in <a className="coder" href="https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN" target="_blank" rel="noopener noreferrer">frontendmentor.io</a></p>
                <p className="copyright">Made by <a className="coder" href="https://www.linkedin.com/in/jorgen-ghazi/" target="_blank" rel="noopener noreferrer">Jorgen Ghazi</a>.</p>
            </div>
        </div>
    )
}


export default BotBar;
import React from 'react';
import './styles.css';
import RequestButton from '../../global-components/request-button/requestButton.js';
import Logo from '../../global-components/logo/logo.js';
import Subtitles from '../../global-components/subtitles/subtitles';
import LinksTopBar from './Components/linksTopBar.js';

function TopBar() {
    return (
        <div id="topBar">
            <Logo />
            <LinksTopBar />
            <RequestButton />
        </div>
    )
}

export default TopBar;
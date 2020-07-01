import React from 'react';
import './styles.css';

function linksTopBar() {
    return (
        <div id="linksTopBar">
            <button className="topBarLink">Home</button>
            <button className="topBarLink">About</button>
            <button className="topBarLink">Contact</button>
            <button className="topBarLink">Blog</button>
            <button className="topBarLink">Carrers</button>
        </div>
    )
}

export default linksTopBar;
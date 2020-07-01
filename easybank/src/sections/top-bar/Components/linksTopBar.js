import React from 'react';

let styles = 'height: 80px; background-color: transparent; border: 0;'

function linksTopBar() {
    return (
        <div id="linksTopBar">
            <button styles={styles}>Home</button>
            <button styles={styles}>About</button>
            <button styles={styles}>Contact</button>
            <button styles={styles}>Blog</button>
            <button styles={styles}>Carrers</button>
        </div>
    )
}

export default linksTopBar;
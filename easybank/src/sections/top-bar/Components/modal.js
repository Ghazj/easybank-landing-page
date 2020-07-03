import React from 'react';
import LinksTopBar from './linksTopBar.js';
import './styles.css';

function Modal() {
    return (
        <div className="bg-modal">
            <div className="modal">
                <LinksTopBar classs={'topBarLinksMobile'} />
            </div>
        </div>

    )
}

export default Modal;
import React from 'react';
import './styles.css';

function linksTopBar(props) {
    return (
        <div className={''}>
            <button className={props.classs}>Home</button>
            <button className={props.classs}>About</button>
            <button className={props.classs}>Contact</button>
            <button className={props.classs}>Blog</button>
            <button className={props.classs}>Carrers</button>
        </div>
    )
}

export default linksTopBar;
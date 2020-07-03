import React from 'react';
import face from '../../../assets/images/svg/icon-facebook.svg';
import insta from '../../../assets/images/svg/icon-instagram.svg';
import pint from '../../../assets/images/svg/icon-pinterest.svg';
import bird from '../../../assets/images/svg/icon-twitter.svg';
import you from '../../../assets/images/svg/icon-youtube.svg';

import "./social.css";

function Socials(){
    return(
        <div className="socials">
            <a href="https://www.facebook.com/profile" target="_blank" rel="noopener noreferrer">
                <img alt="" src={face}/>
            </a >
            <a href="https://www.instagram.com/?hl=es-la" target="_blank" rel="noopener noreferrer">
                <img alt="" src={insta}/>
            </a >
            <a href="https://ar.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <img alt="" src={pint}/>
            </a >
            <a href="https://twitter.com/explore" target="_blank" rel="noopener noreferrer">
                <img alt="" src={bird}/>
            </a >
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img alt="" src={you}/>
            </a >
        </div>
    )
}

export default Socials;
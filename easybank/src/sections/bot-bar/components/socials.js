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
            <a href="www.facebook.com/user.php">
                <img alt="" src={face}/>
            </a >
            <a href="">
                <img alt="" src={insta}/>
            </a >
            <a href="">
                <img alt="" src={pint}/>
            </a >
            <a href="">
                <img alt="" src={bird}/>
            </a >
            <a href="">
                <img alt="" src={you}/>
            </a >
        </div>
    )
}

export default Socials;
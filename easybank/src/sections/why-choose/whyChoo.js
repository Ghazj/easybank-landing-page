import React from 'react';
import './styles.css';
import Tittle from '../../global-components/subtitles/subtitles.js';
import BaseText from '../../global-components/base-text/baseText';
import Option from './options/options.js';
import icon1 from '../../assets/images/svg/icon-online.svg';
import icon2 from '../../assets/images/svg/icon-budgeting.svg';
import icon3 from '../../assets/images/svg/icon-onboarding.svg';
import icon4 from '../../assets/images/svg/icon-api.svg';

function WhyChoo() {
    return (
        <div className="whyChoo">
            <div className="tittleText">
                <Tittle text={'Why choose Easybank?'} />
                <BaseText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} />
            </div>
            <div className="options">
                <Option iconUrl={icon1} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Online Banking'} />
                <Option iconUrl={icon2} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Simple Budgeting'} />
                <Option iconUrl={icon3} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Fast Onboarding'} />
                <Option iconUrl={icon4} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Open API'} />
            </div>
        </div>
    );
}

export default WhyChoo;
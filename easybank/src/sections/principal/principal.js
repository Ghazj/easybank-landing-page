import React from 'react';
import './styles.css';
import phones from '../../assets/images/image-mockups.png';
import BaseText from '../../global-components/base-text/baseText';
import Tittle from '../../global-components/subtitles/subtitles.js';
import RequestButton from '../../global-components/request-button/requestButton.js';

function Principal(){
    return(
      <div className="principal">
          <Tittle text={'Next generation digital banking'}/>
          <BaseText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'}/>
          <RequestButton/>
          <img alt="Phones" src={phones} className="phones"/>
      </div>  
    );
}

export default Principal;
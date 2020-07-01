import React from 'react';
import './styles.css';
import Tittle from '../../../global-components/subtitles/subtitles.js';
import BaseText from '../../../global-components/base-text/baseText.js';

function Option(props){
    return(
      <div className="optionWhy">
          <img alt="icon" src={props.iconUrl}/>
          <Tittle className="tittleOptionsWhy" text={props.tittle}/>
          <BaseText className="baseTextOptionWhy" text={props.text}/>
      </div>  
    );
}

export default Option;
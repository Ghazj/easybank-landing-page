import React from 'react';
import './styles.css';
import BaseText from '../../../global-components/base-text/baseText.js';

function Option(props){
    return(
      <div className="optionWhy">
          <img alt="icon" src={props.iconUrl}/>
           <h3 className="tittleOptionsWhy">{props.tittle}</h3> 
          <BaseText className="baseTextOptionWhy" text={props.text}/>
      </div>  
    );
}

export default Option;
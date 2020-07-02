import React from 'react';
import './styles.css';
import BaseText from '../../global-components/base-text/baseText';
import RequestButton from '../../global-components/request-button/requestButton.js';

function Principal() {
  return (
    <div className="principal">
      <h1 className="principalText">Next generation<br />digital banking</h1>
      <BaseText text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} />
      <RequestButton />
      
    </div>
  );
}

export default Principal;
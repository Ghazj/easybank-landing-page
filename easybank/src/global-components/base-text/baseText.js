import React from 'react';
import './styles.css';

function BaseText(props) {
    return (
        <p className="baseText">{props.text}</p>
    )
};

export default BaseText;
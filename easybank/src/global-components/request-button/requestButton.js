import React from 'react';
import './styles.css';

function RequestButton(props) {
    return (
        <button className="requestButton" id={props.id}>Request Invite</button>
    )
};

export default RequestButton;
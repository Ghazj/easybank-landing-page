import React from 'react';
import './styles.css';

function Subtitles(props) {
    return (
        <h2 className="subtitles">{props.text}<br/>{props.text2}</h2>
    )
};

export default Subtitles;
import React from 'react';
import './styles.css';
import BaseText from '../../../global-components/base-text/baseText.js';

function Articles(props) {
    return (
        <div className="article">
            <img alt="Article" src={props.imageUrl} className="image" />
            <div className="articleText">
                <BaseText text={props.idText} />
                <h3 className="tittleArt">{props.tittle}</h3>
                <BaseText className="" text={props.text} />
            </div>
        </div>
    );
}

export default Articles;
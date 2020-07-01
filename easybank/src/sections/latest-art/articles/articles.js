import React from 'react';
import './styles.css';
import Tittle from '../../../global-components/subtitles/subtitles.js';
import BaseText from '../../../global-components/base-text/baseText.js';

function Articles(props) {
    return (
        <div className="article">
            <img alt="image" src={props.imageUrl} className="image" />
            <div className="articleText">
                <BaseText text={props.idText} />
                <Tittle className="" text={props.tittle} />
                <BaseText className="" text={props.text} />
            </div>
        </div>
    );
}

export default Articles;
import React from 'react';
import './styles.css';
import Articles from './articles/articles.js';
import image1 from '../../assets/images/image-confetti.jpg';
import image2 from '../../assets/images/image-currency.jpg';
import image3 from '../../assets/images/image-plane.jpg';
import image4 from '../../assets/images/image-restaurant.jpg';

function LatestArt() {
    return (
        <div className="latestArt">
            <div className="tittleTextArt">
                <h2 className="latestTittle">Latest Articles</h2>
            </div>
            <div className="articles">
                <Articles imageUrl={image1} idText={'By nombre equis'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Online Banking como en la casa de perejensitaa.!'} />
                <Articles imageUrl={image2} idText={'By nombre equis'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Online Banking'} />
                <Articles imageUrl={image3} idText={'By nombre equis'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Online Banking'} />
                <Articles imageUrl={image4} idText={'By nombre equis'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'} tittle={'Online Banking'} />
            </div>
        </div>
    );
}

export default LatestArt;
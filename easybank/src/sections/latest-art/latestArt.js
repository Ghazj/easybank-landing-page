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
                <Articles imageUrl={image1}
                    idText={'By Jorgen Ghazi'}
                    text={'Lorem ipsum dolor sitLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'}
                    tittle={'Receive money in any currency with no fees'} />

                <Articles imageUrl={image2}
                    idText={'By Kale Anders'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed Lorem ipsum dolor sit amet, consectetur adipi sci fgfgdng elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'}
                    tittle={'Treat yourself without worrying about money'} />

                <Articles imageUrl={image3}
                    idText={'By Susana Martinez'}
                    text={'Lorem ipsumLorem ipsum dolor sit dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliquam id libero vitae rutrum. Aenean sed'}
                    tittle={'take your Easybank card wherever you go'} />

                <Articles imageUrl={image4}
                    idText={'By Nachy Hernandez'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor sem ligula. Nam aliqLorem ipsum dolor situam id libero vitae rutrum. Aenean sed'}
                    tittle={'Our invite-only Beta accounts are now live!'} />
            </div>
        </div>
    );
}

export default LatestArt;
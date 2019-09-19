import React from 'react';
import './style.css';

const BannerLink = () => {
    return(
        <div className="banner_link_to_watch">
            <div className="banner_watch_text">
                You can watch all Naruto Shippuden episodes by
            </div>
            <div className="banner_link">
                <a href="https://www.crunchyroll.com/pt-br/naruto-shippuden" target="_blank" rel="noopener noreferrer">Clicking here</a>
            </div>
        </div>
    );
};

export default BannerLink;
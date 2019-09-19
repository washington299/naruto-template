import React from 'react';
import './style.css';

const AnimeInformation = () => {
    return(
        <aside> 
            <div className="anime_informations" id="anime_informations">
                <div className="block1">
                    <div className="widget_title">What is Naruto?</div>
                    <div className="widget_text">
                        Naruto is a Japanese manga series. It tells the story of Naruto Uzumaki, a young ninja who seeks to gain recognition from his peers and also dreams of becoming the Hokage, the leader of his village.
                    </div>
                    <div className="widget_button"><a href="https://en.wikipedia.org/wiki/Naruto" target="_blank" rel="noopener noreferrer">More info</a></div>
                </div>
                <div className="block2">
                    <div className="widget_title">Naruto's origin</div>
                    <div className="widget_text">
                        Naruto was serialized in Shueisha's magazine, Weekly Shōnen Jump from 1999 to 2014. The manga was adapted into an anime television series which broadcast 220 episodes in Japan from 2002 to 2007.
                    </div>
                    <div className="widget_button"><a href="https://en.wikipedia.org/wiki/Naruto" target="_blank" rel="noopener noreferrer">More info</a></div>
                </div>
                <div className="block3">
                    <div className="widget_title">Anime rewards</div>
                    <div className="widget_text">
                        The Naruto anime was listed as the 38th best animated show in IGN's Top 100 Animated Series. Japanese television poll based on a nationwide survey in which Naruto placed 17th.
                    </div>
                    <div className="widget_button"><a href="https://en.wikipedia.org/wiki/Naruto" target="_blank" rel="noopener noreferrer">More info</a></div>
                </div>
            </div>
        </aside>
    );
};

export default AnimeInformation;
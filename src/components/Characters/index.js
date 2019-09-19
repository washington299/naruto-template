import React from 'react';

import './style.css';

import Naruto from '../../images/naruto.png';
import Sakura from '../../images/sakura.png'; 
import Sasuke from '../../images/sasuke.png';
import Kakashi from '../../images/kakashi.png';

const Characters = () => {
    return(
        <section className="centralize" id="characters">
            <div className="container column">
                <div className="characters_area" id="characters_area">
                    <div className="area_title">
                        <div className="widget_title" style={{fontSize: 30}}>
                            Main characters
                        </div>
                    </div>
                    <div className="characters_information padding-left">
                        <article>
                            <a href="https://en.wikipedia.org/wiki/Naruto_Uzumaki" target="_blank">
                                <div className="character_image">
                                    <img src={Naruto} title="naruto"/>
                                </div>
                                <div className="character_name">Naruto Uzumaki</div>
                                <div className="character_description">
                                    he is a young ninja from the fictional village of Konohagakure. The villagers ridicule Naruto on account of the Nine-Tailed Demon Fox a malevolent creature that attacked Konohagakure that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage. His carefree, optimistic and boisterous personality enables him to befriend other Konohagakure ninja, as well as ninja from other villages.
                                </div>
                            </a>
                        </article>

                        <article>
                            <a href="https://en.wikipedia.org/wiki/Sasuke_Uchiha" target="_blank">
                                <div className="character_image">
                                    <img src={Sasuke} title="sasuke"/>
                                </div>
                                <div className="character_name">Sasuke Uchiha</div>
                                <div className="character_description">
                                    Sasuke belongs to the Uchiha clan, a notorious ninja family, and one of the most powerful, allied with Konohagakure. Most of its members were massacred by Sasuke's older brother, Itachi Uchiha, before the series began, leaving Sasuke one of the few living. Despite becoming empathetic toward his teammates Naruto Uzumaki and Sakura Haruno.
                                </div>
                            </a>
                            
                        </article>

                        <article>
                            <a href="https://en.wikipedia.org/wiki/Sakura_Haruno" target="_blank">
                                <div className="character_image">
                                    <img src={Sakura} title="sakura"/>
                                </div>
                                <div className="character_name">Sakura Haruno</div>
                                <div className="character_description">
                                    Sakura is depicted as a kunoichi affiliated with Konohagakure and a part of Team 7, which consists of herself, Naruto Uzumaki, Sasuke Uchiha, and their sensei Kakashi Hatake. Sakura initially has an infatuation for Sasuke, praising him at every juncture, and heaps scorn upon the less-skilled teammate Naruto. Over the course of the series, she begins to shed this singularly driven persona and grows more appreciative and accepting of Naruto.
                                </div>
                            </a>
                            
                        </article>

                        <article>
                            <a href="https://en.wikipedia.org/wiki/Kakashi_Hatake" target="_blank">
                                <div className="character_image">
                                    <img src={Kakashi} title="kakashi"/>
                                </div>
                                <div className="character_name">Kakashi Hatake</div>
                                <div className="character_description">
                                    Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno. He is initially portrayed as a detached and apathetic figure, but as the series progresses, his loyalty to his friends and students becomes increasingly apparent. Kakashi's past has been extensively explored in the series, resulting in a gaiden being devoted to his past experiences.
                                </div>
                            </a>
                        </article>
                    </div>
                    <hr/>
                </div>
            </div>
        </section>
    );
};

export default Characters;
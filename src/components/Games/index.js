import React from 'react';

import './style.css';

import game1 from '../../images/game1.jpg';
import game2 from '../../images/game2.jpg';
import game3 from '../../images/game3.jpg';
import game4 from '../../images/game4.jpg';
import game5 from '../../images/game5.jpg';
import game6 from '../../images/game6.jpg';
import game7 from '../../images/game7.jpg';
import game8 from '../../images/game8.jpg';
import game9 from '../../images/game9.jpg';
import game10 from '../../images/game10.jpg';
import game11 from '../../images/game11.jpg';
import game12 from '../../images/game12.png';
import game13 from '../../images/game13.jpg';
import game14 from '../../images/game14.png';

const Games = () => {
    return(
        <section className="centralize" id="games">
            <div className="container column">
                <div className="naruto_games padding-left" id="naruto_games">
                    <div className="area_title">
                        <div className="widget_title" style={{fontSize: 30}}>
                            Naruto games
                        </div>
                    </div>
                    <div className="game_area padding-right">
                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game1} title="Naruto Ultimate Ninja"/>
                            </div>
                            <div className="game_title">
                                Naruto: Ultimate Ninja - 2003
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game2} title="Naruto Ultimate Ninja 2"/>
                            </div>
                            <div className="game_title">
                                Naruto: Ultimate Ninja 2 - 2004
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game3} title="Naruto Ultimate Ninja 3"/>
                            </div>
                            <div className="game_title">
                                Naruto: Ultimate Ninja 3 - 2005
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game4} title="Naruto: Ultimate Ninja Heroes 2: Panthom fortress - 2006"/>
                            </div>
                            <div className="game_title">
                                Naruto: Ultimate Ninja Heroes 2: Panthom fortress - 2006
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game5} title="Naruto Shippūden: Ultimate Ninja 4"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippūden: Ultimate Ninja 4 - 2007
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game6} title="Naruto Shippūden: Ultimate Ninja 5"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippūden: Ultimate Ninja 5 - 2007
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game7} title="Naruto: Ultimate Ninja Storm"/>
                            </div>
                            <div className="game_title">
                                Naruto: Ultimate Ninja Storm - 2008
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game8} title="Naruto: Ultimate Ninja Storm"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Heroes 3 - 2009
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game9} title="Naruto Shippuden: Ultimate Ninja Heroes 3"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Storm 2 - 2010
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game10} title="Naruto Shippuden: Ultimate Ninja Storm 2"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippūden: Ultimate Ninja Impact - 2011
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game11} title="Naruto Shippuden: Ultimate Ninja Storm Generations"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Storm Generations
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game12} title="Naruto Shippuden: Ultimate Ninja Storm 3"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Storm 3 - 2013
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game13} title="Naruto Shippuden: Ultimate Ninja Storm Revolution"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Storm Revolution - 2014
                            </div>
                        </div>

                        <div className="game_content">
                            <div className="game_thumbnail">
                                <img src={game14} title="Naruto Shippuden: Ultimate Ninja Storm 4"/>
                            </div>
                            <div className="game_title">
                                Naruto Shippuden: Ultimate Ninja Storm 4 - 2016
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Games;
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './style.css';
import menuMobile from '../../images/menu_mobile.png';

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false);


    const openMenu = () => {
        setMenuOpened(!menuOpened);
    };

    return(
        <header>
            <div className="container">
                <div className="logo"><a>Naruto Uzumaki</a></div>
                <div className="menu">
                    <nav>
                        <div className="menuMobile" onClick={openMenu}>
                            <img src={menuMobile} title="menu-mobile" width="50" height="50" />
                        </div>
                        <ul className={menuOpened ? 'opened' : ''}>
                        <Link
                            activeClass="active"
                            to="anime"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        ><li onClick={openMenu}>Anime</li></Link>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        ><li onClick={openMenu}>About</li></Link>
                        <Link
                            activeClass="active"
                            to="characters"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        ><li onClick={openMenu}>Characters</li></Link>
                        <Link
                            activeClass="active"
                            to="jutsus"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        ><li onClick={openMenu}>Jutsus</li></Link>
                        <Link
                            activeClass="active"
                            to="games"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {1000}
                        ><li onClick={openMenu}>Games</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
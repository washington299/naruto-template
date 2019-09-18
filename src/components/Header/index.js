import React, { useState, useRef } from 'react';
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
                <div className="logo" id="start"><a>Naruto Uzumaki</a></div>
                <div className="menu">
                    <nav>
                        <div className="menuMobile" onClick={openMenu}>
                            <img src={menuMobile} title="menu-mobile" width="50" height="50" />
                        </div>
                        <ul className={menuOpened ? 'opened' : ''}>
                            <a><li>Anime</li></a>
                            <a><li>About</li></a>
                            <a><li>Characters</li></a>
                            <a><li>Jutsus</li></a>
                            <a><li>Games</li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
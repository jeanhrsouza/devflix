import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/devflix.png';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button/index';



function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="DevFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
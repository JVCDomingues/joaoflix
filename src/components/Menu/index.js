import React from 'react';
import logo from '../../assets/images/logo.png';

import './Menu.css';
import Button from '../../components/Button'
// import ButtonLink from './components/ButtonLink';

const Menu = () => {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Logo JoãoFlix"></img>
      </a>

      <Button 
        as="a"
        href="/"
        className="ButtonLink"
      >
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;
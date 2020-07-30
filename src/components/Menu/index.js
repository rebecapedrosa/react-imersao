import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
function Menu() {
  return (
    <nav className="Menu">
      <nav to="/">
        <img className="Logo" src={Logo} alt="RebFlix logo" />
      </nav>

      <Button as="a" className="ButtonLink" to="/cadastro/video">
        New Video
      </Button>
    </nav>
  );
}

export default Menu;
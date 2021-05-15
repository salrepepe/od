import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/header/logo.svg';
import facebook from '../images/header/facebook.svg';
import instagram from '../images/header/instagram.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container d-flex justify-content-between">
        <nav className="nav">
          <div className="d-flex">
            <img src={logo} alt="logo" className="header__logo"/>
              <Link to="/aboutUs" className="nav-item">О компании</Link>
              <a href="#cost-desc" className="nav-item">Услуги</a>
              <a href="#works" className="nav-item">Наши работы</a>
              <a href="#footer" className="nav-item">Контакты</a>
          </div>
        </nav>
        <div> 
          <a href="https://www.instagram.com/odigital.dev/" target="_blank"><img src={instagram} className=" header__img" alt="instagram" /></a>
          <a href="https://www.facebook.com/oracledigital.kg" target="_blank"><img src={facebook} className=" header__img" alt="facebook" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
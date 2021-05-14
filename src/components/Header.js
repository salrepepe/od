import React from 'react';
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
              <a href="#" className="nav-item">О компании</a>
              <a href="#" className="nav-item">Услуги</a>
              <a href="#" className="nav-item">Наши работы</a>
              <a href="#" className="nav-item">Контакты</a>
          </div>
        </nav>
        <div> 
          <a href=""><img src={instagram} className=" header__img" alt="instagram" /></a>
          <a href=""><img src={facebook} className=" header__img" alt="facebook" /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { burgerMenuToggle, popupFormToggle } from '../redux/reducers/funcReducer'
import logo from '../images/header/logo.svg';
import facebook from '../images/header/facebook.svg';
import instagram from '../images/header/instagram.svg';
import message from '../images/aboutUs/message.svg'

const Header = () => {

  const [sticky, setSticky] = useState(false);

  const burgerMenu = useSelector((s) => s.funcReducer.isBurgerMenuActive);
  const popupForm = useSelector((s) => s.funcReducer.isPopupFormActive);

  const dispatch = useDispatch();

  const setBurgerMenuActive = () => {
    dispatch(burgerMenuToggle(!burgerMenu))
  }

  const buttonHandler = () => {
    dispatch(popupFormToggle(!popupForm));
  };

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setSticky(true)
    }
    else {
      setSticky(false)
    }
  }
  window.addEventListener('scroll', changeBackground)

  return (
    <header className={sticky ? 'header  header_sticky' : 'header'}>
      <div className="container d-flex justify-content-between">
        <nav className={burgerMenu ? 'nav nav_active' : 'nav'}>
          <div className="d-flex">
            <img src={logo} alt="logo" className="header__logo"/>
              <Link to="/aboutUs" className="nav-item">О компании</Link>
              <a href="#cost-desc" className="nav-item">Услуги</a>
              <a href="#works" className="nav-item">Наши работы</a>
              <a href="#footer" className="nav-item">Контакты</a>
          </div>
        </nav>
        <div> 
          <a href="https://www.instagram.com/odigital.dev/" rel="noreferrer" target="_blank"><img src={instagram} className=" header__img" alt="instagram" /></a>
          <a href="https://www.facebook.com/oracledigital.kg" rel="noreferrer" target="_blank"><img src={facebook} className=" header__img" alt="facebook" /></a>
        </div>
        <div className={burgerMenu ? 'burger-menu burger-menu_active' : 'burger-menu'} onClick={setBurgerMenuActive}>
          <div className={burgerMenu ? 'burger-menu__line burger-menu__line_active': 'burger-menu__line'}></div>
          <div className={burgerMenu ? 'burger-menu__line burger-menu__line_active': 'burger-menu__line'}></div>
          <div className={burgerMenu ? 'burger-menu__line burger-menu__line_active': 'burger-menu__line'}></div>
        </div>
        <button type="button" onClick={buttonHandler} 
          className={sticky ? 'aboutUsMain__button aboutUsMain__button_active' : 'aboutUsMain__button'}>
            <img src={message} alt="message" /></button>
      </div>
    </header>
  );
};

export default Header;
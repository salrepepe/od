import React from 'react';
import logo from '../images/header/logo.svg';
import instagram from '../images/header/instagram.svg';
import facebook from '../images/header/facebook.svg';
import icon1 from '../images/footer/icon.svg';
import icon2 from '../images/footer/icon2.svg';
import icon3 from '../images/footer/icon3.svg';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
           <div className="col-3">
             <img src={logo} alt="logo" />
             <div className="logo-line"></div>
             <p className="footer__txt">Мы находим решения</p>
           </div>
           <div className="col-3 d-flex flex-column">
             <a href="#home" className="footer__txt">Главная</a>
             <a href="#aboutUs" className="footer__txt">О компании</a>
             <a href="#cost-desc" className="footer__txt">Услуги</a>
             <a href="#works" className="footer__txt">Наши работы</a>
             <a href="#cta" className="footer__txt">Оставить заявку</a>
           </div>
           <div className="col-3 d-flex flex-column">
             <a href="https://www.instagram.com/odigital.dev/" target="_blank" className="footer__txt d-flex">
               <img src={instagram} alt="instagram"/>
               <p className="txtIcon"></p>
               instagram</a>
             <a href="https://www.facebook.com/oracledigital.kg" target="_blank" className="footer__txt d-flex">
               <img src={facebook} alt="facebook"/>
               <p className="txtIcon">facebook</p>
               </a>
           </div>
           <div className="col-3 d-flex flex-column">
            <a href="tel:+996709683738" className=" footer__txt d-flex">
              <img src={icon2}/>
              <p className="txtIcon">+996 709 683 738</p>
              </a>
            <a href="tel:+996557978715" className="footer__txt d-flex">
              <img src={icon2}/>
              <p className="txtIcon">+996 557 978 715</p></a>
            <a href="mailto:contact@odigital.dev" className="footer__txt d-flex">
              <img src={icon1}/>
              <p className="txtIcon">contact@odigital.dev</p></a>
            <a href="https://go.2gis.com/7freqb" className="footer__txt d-flex">
              <img src={icon3}/>
              <p className="txtIcon">Кыргызстан, Бишкек, ул. Тимирязева 80</p>
            </a>
           </div>
        </div>
        <div className="footer__line"></div>
        <p className="footer__txt last">Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
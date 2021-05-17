import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import InputMask from 'react-input-mask';
import { popupThanksToggle, burgerMenuToggle, popupSoonToggle, dropdownToggle, popupFormToggle} from '../../redux/reducers/funcReducer';
import logo from '../../images/header/logo.svg';
import facebook from '../../images/header/facebook.svg';
import instagram from '../../images/header/instagram.svg';
import notebook from '../../images/home/notebook.svg';
import icon1 from '../../images/footer/icon.svg';
import icon2 from '../../images/footer/icon2.svg';
import icon3 from '../../images/footer/icon3.svg';
import message from '../../images/aboutUs/message.svg'

const AboutUs = () => {
  const [sticky, setSticky] = useState(false);
  const [dropDown, setDropDown] = useState('')

  const dispatch = useDispatch()

  const burgerMenu = useSelector((s) => s.funcReducer.isBurgerMenuActive);
  const popupForm = useSelector((s) => s.funcReducer.isPopupFormActive);
  const popupThanks = useSelector((s) => s.funcReducer.isPopupThanksActive);
  const popupSoon = useSelector((s) => s.funcReducer.isPopupSoonActive);
  const dropdown = useSelector((s) => s.funcReducer.isDropdownActive);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(popupThanksToggle(!popupThanks))
  }

  const setBurgerMenuActive = () => {
    dispatch(burgerMenuToggle(!burgerMenu))
  }

  const buttonHandler = () => {
    dispatch(popupSoonToggle(!popupSoon))
  }

  const buttonChatHandler = () => {
    dispatch(popupFormToggle(!popupForm))
  }

  const dropdownHandler = (e) => {
    setDropDown(e.target.value)
    dispatch(dropdownToggle(!dropdown))
  };

  const dropdownItem = [
    <button type="button" value='Сайт хочется' onClick={dropdownHandler} className="dropdown">Сайт хочется</button>,
    <button type="button" value='Приложение хочется' onClick={dropdownHandler} className="dropdown">Приложение хочется</button>
  ]

  const dropDownToggle = () => {
    dispatch(dropdownToggle(!dropdown))
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
    <div className="aboutUs">
      <header className="header">
        <div className=" container d-flex justify-content-between">
         <nav className={burgerMenu ? 'nav nav_active' : 'nav'}>
           <div className="d-flex">
              <img src={logo} alt="logo" className="header__logo"/>
              <a href="#aboutUs" className="nav-item active">О компании</a>
              <a href="#our-team" className="nav-item">О команде</a>
              <a href="#dev-process" className="nav-item">Наши работы</a>
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
          <button type="button" onClick={buttonChatHandler} 
          className={sticky ? 'aboutUsMain__button aboutUsMain__button_active' : 'aboutUsMain__button'}>
            <img src={message} alt="message" /></button>
        </div>
      </header>
      <div className="main-page" id="main-page">
      <div className="container">
        <div className="row">
          <div className="col-6 col-sm-12 col-md-12">
            <p className="main-page__txt">Наша компания была основана в 2018 году. <br/><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in facilisis metus. Nulla ligula nisl, cursus eget libero et, rutrum tincidunt justo. Fusce eget molestie lorem, eget laoreet metus. Sed sed lobortis justo, vel suscipit nunc. Sed posuere nibh eget nisl porta sollicitudin. Aenean euismod urna ligula, ut suscipit elit finibus ut.</p>
          </div>
            <div className="col-6 col-sm-12 col-md-12">
            <img src={notebook} className="home__img aboutUs" alt="notebook" />
              <div className="home__ellipse aboutUs"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="our-team" id="our-team">
    <div className="aboutUsMain__ellipse aboutUs"></div>
      <div className="container">
        <h2 className="our-team__title">Наша команда</h2>
        <div class="row justify-content-center">
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
          <div className="col col-lg-4 col-xl-3">
            <div className="our-team__img"></div>
            <p className="our-team__name">Jane Daw</p>
            <p className="our-team__job">Со-основатель</p>
          </div>
        </div>
      </div>
    </div>
    <div className="dev-process" id="dev-process">
      <div className="container">
        <h2 className="dev-process__title">Как мы работаем?</h2>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="cards__title">Создаем новое</div>
            <ul className="list">
              <li className="list-items">Анализ рынка и конкурентов</li>
              <li className="list-items">Создание концепции</li>
              <li className="list-items">Разработка (дизайн, серверная часть, фронт-часть, анимации) </li>
              <li className="list-items">Полное тестирование, релиз и поддержка продукта</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="cards__title">Продолжаем начатое</div>
            <ul className="list">
              <li className="list-items">Веб аналитика</li>
              <li className="list-items">Контекстная реклама</li>
              <li className="list-items">Контекстная реклама</li>
              <li className="list-items">SEO продвижение</li>
            </ul>
          </div>
        </div>
        <button type="button"  onClick={buttonHandler} className="dev-process__button">Увидеть примеры работ</button>
      </div>
    </div>
    <div className="cta" id="cta">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="cta__title">Оставить заявку на бесплатную консультацию</h2>
          <form action=""  onSubmit={formHandler} className="form">
          <div className="form__inputBlock">
            <h4 className="input__title">ФИО</h4>
            <input type="text" className="form__input" placeholder="Зубенко Михаил Петрович" required />
          </div>
          <div className="form__inputBlock">
            <h4 className="input__title">Номер телефона</h4>
            <InputMask className="form__input" required placeholder="+996"mask="+\9\96(999) 99-99-99"/>
          </div>
          <div className="form__inputBlock">
            <h4 className="input__title">По какой услуге вы хотите получить консультацию?</h4>
            <input className="form__input dropdown" value={dropDown} placeholder="Сайт хочется"
            onClick={dropDownToggle} type="dropdown"  required/>
            <div className={dropdown ? 'dropdownBlock dropdownBlock_active' : 'dropdownBlock'}>
              {dropdownItem[0]}
              {dropdownItem[1]}
            </div>
          </div>
          <button type="submit" className="form__button">Отправить</button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
           <Link className="col-sm-12 col-md-12 col-lg-3 col-xl-3" to="/">
             <img src={logo} alt="logo" />
             <div className="logo-line"></div>
             <p className="footer__txt">Мы находим решения</p>
           </Link>
           <div className="col col-3 col-sm-12 col-md-3 col-lg-3 col-xl-3 d-flex flex-column">
             <a href="#main-page" className="footer__txt">Главная</a>
             <a href="#our-team" className="footer__txt">О команде</a>
             <a href="#dev-process" className="footer__txt">Услуги</a>
             <a href="#cta" className="footer__txt">Оставить заявку</a>
           </div>
           <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex flex-column">
             <a href="https://www.instagram.com/odigital.dev/" rel="noreferrer" target="_blank" className="footer__txt d-flex">
               <img src={instagram} alt="instagram"/>
               <p className="txtIcon"></p>
               instagram</a>
             <a href="https://www.facebook.com/oracledigital.kg" rel="noreferrer" target="_blank" className="footer__txt d-flex">
               <img src={facebook} alt="facebook"/>
               <p className="txtIcon">facebook</p>
               </a>
           </div>
           <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex flex-column">
            <a href="tel:+996709683738" className=" footer__txt d-flex">
              <img src={icon2} alt="kek"/>
              <p className="txtIcon">+996 709 683 738</p>
              </a>
            <a href="tel:+996557978715" className="footer__txt d-flex">
              <img src={icon2} alt="kek"/>
              <p className="txtIcon">+996 557 978 715</p></a>
            <a href="mailto:contact@odigital.dev" className="footer__txt d-flex">
              <img src={icon1} alt="kek"/>
              <p className="txtIcon">contact@odigital.dev</p></a>
            <a href="https://go.2gis.com/7freqb" className="footer__txt d-flex">
              <img src={icon3} alt="kek"/>
              <p className="txtIcon">Кыргызстан, Бишкек, ул. Тимирязева 80</p>
            </a>
           </div>
        </div>
        <div className="footer__line"></div>
        <p className="footer__txt last">Все права защищены | 2021 | Oracle Digital</p>
      </div>
    </div>

    </div>
  );
};

export default AboutUs;
import React, { useEffect } from 'react';
import InputMask from 'react-input-mask';
import { useSelector, useDispatch } from "react-redux";
import { popupFormToggle, popupThanksToggle } from '../redux/reducers/funcReducer'


const Popups = () => {

  const dispatch = useDispatch();
  
  const popupForm = useSelector((s) => s.funcReducer.isPopupFormActive);
  const popupThanks = useSelector((s) => s.funcReducer.isPopupThanksActive);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(popupThanksToggle(!popupThanks));
    dispatch(popupFormToggle(!popupForm));
  }
  
    const PopupFormToggle = () => {
      dispatch(popupFormToggle(!popupForm));
    }
  
    const PopupThanksToggle  = () => {
      dispatch(popupThanksToggle(!popupThanks));
    }



  return (
    <div className={popupForm || popupThanks ? 'overlay overlay_active' : 'overlay'}>
      <div className={popupForm ? 'popup-form popup-form_active' : 'popup-form'}>
        <div className="closeButton" onClick={PopupFormToggle}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
          <form action="" onSubmit={formHandler} className="form">
            <div className="form__inputBlock">
              <h4 className="input__title">ФИО</h4>
              <input type="text" required placeholder="Зубенко Михаил Петрович" className="form__input" />
            </div>
            <div className="form__inputBlock">
              <h4 className="input__title">Номер телефона</h4>
              <InputMask className="form__input" required placeholder="+996"mask="+\9\96(999) 99-99-99"/>;
            </div>
            <div className="form__inputBlock">
              <h4 className="input__title">По какой услуге вы хотите получить консультацию?</h4>
              <select className="form__input">
                <option className="dropdown">Сайт хочу</option>
                <option className="dropdown">Приложение хочу</option>
              </select>
            </div>
            <button type="submit" className="form__button">Отправить</button>
          </form>
      </div>
      <div className={popupThanks ? 'popup-thanks popup-thanks_active' : 'popup-thanks'}>
        <div className="closeButton" onClick={PopupThanksToggle}>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h4 className="popup-thanks__txt">Спасибо за обращение. Наши менеджеры вскоре свяжутся с вами</h4>
      </div>
    </div>
  );
};

export default Popups;
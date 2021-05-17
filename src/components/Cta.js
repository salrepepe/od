import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { popupThanksToggle } from '../redux/reducers/funcReducer'
import InputMask from 'react-input-mask';

const Cta = () => {
  const dispatch = useDispatch()

  const popupThanks = useSelector((s) => s.funcReducer.isPopupThanksActive);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(popupThanksToggle(!popupThanks))
  }

  return (
    <section className="cta" id="cta">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="cta__title">Оставить заявку на бесплатную консультацию</h2>
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
      </div>
    </section>
  );
};

export default Cta;
import React from 'react';

const Cta = () => {
  return (
    <section className="cta" id="cta">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="">
          <h2 className="cta__title">Оставить заявку на бесплатную консультацию</h2>
          <form action="" className="form">
          <div className="form__inputBlock">
            <h4 className="input__title">ФИО</h4>
            <input type="text" className="form__input" />
          </div>
          <div className="form__inputBlock">
            <h4 className="input__title">Номер телефона</h4>
            <input type="text" className="form__input" />
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
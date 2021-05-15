import React from 'react';
import logo from '../images/home/logo.svg';
import notebook from '../images/home/notebook.svg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1 className="home__title"><img src={logo} alt="ORACLE DIGITAL" /></h1>
            <h2 className="home__subtitle">мы находим решения</h2>
            <h3 className="home__descr">Разрабатываем сайты и мобильные приложения для удобства вашей жизни и развития вашего бизнеса</h3>
            <button type="button" className="home__button">Оставить заявку</button>
          </div>
            <div className="col-6">
            <img src={notebook} className="home__img" alt="notebook" />
              <div className="home__ellipse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
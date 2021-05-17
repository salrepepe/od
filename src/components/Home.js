import React from 'react';
import logo from '../images/home/logoo.svg';
import notebook from '../images/home/notebook.svg';
import vector from '../images/home/Vector.svg';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="container">
        <div className="row">
          <div className="col col-6 col-md-12 ">
            <div className="titleBlock">
              <h1 className="home__title"><img src={logo} alt="ORACLE DIGITAL" /></h1>
              <img src={vector} className="home__vector" alt="vector" />
            </div>
            <h2 className="home__subtitle">мы находим решения</h2>
            <h3 className="home__descr">Разрабатываем сайты и мобильные приложения для удобства вашей жизни и развития вашего бизнеса</h3>
            <a href="#cta" ><button className="home__button" type="button">Оставить заявку</button></a>
          </div>
            <div className="col col-6 col-md-12 ">
            <img src={notebook} className="home__img" alt="notebook" />
              <div className="home__ellipse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
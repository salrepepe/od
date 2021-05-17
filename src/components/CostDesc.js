import React from 'react';

const CostDesc = () => {
  return (
    <section className="cost-desc" id="cost-desc">
      <div className="container">
        <h2 className="cost-desc__title">Что входит в работу по разработке сайта?</h2>
        <div class="row justify-content-center">
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">1</p>
            <h4 className="cost-desc__cards">Разработка концепции сайта на основе анализа рынка, конкурентов и тенденций.</h4>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">2</p>
            <h4 className="cost-desc__cards">Разработка дизайна под вашу аудиторию.</h4>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">3</p>
            <h4 className="cost-desc__cards">При необходимости написание вкусного, продающего контента для сайта.</h4>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">4</p>
            <h4 className="cost-desc__cards">Создание адаптивного сайта под все существующие платформы и браузеры.</h4>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">5</p>
            <h4 className="cost-desc__cards">Разработка удобной и заточенной под клиента системы управления сайтом.</h4>
          </div>
          <div className="col col-sm-12 col-md-6 col-xl-4  d-flex">
            <p className="cost-desc__numbers">6</p>
            <h4 className="cost-desc__cards">Внутренняя SEO оптимизация сайта под поисковики Google и Яндекс.</h4>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CostDesc;
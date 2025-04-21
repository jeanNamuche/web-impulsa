import React from 'react';
import './Promociones.css';

const promociones = [
  {
    img: '/img/curso1.png',
    alt: 'Cursos Impulsa 1',
  },
  {
    img: '/img/matricula.png',
    alt: 'Matrícula Gratis',
  },
  {
    img: '/img/curso2.png',
    alt: 'Cursos Impulsa 2',
  },
];

const Promociones = () => {
  return (
    <div className="promociones-container">
      <div className="promociones-cards">
        {promociones.map((promo, index) => (
          <img
            key={index}
            src={promo.img}
            alt={promo.alt}
            className="promo-card"
          />
        ))}
      </div>
      <p className="promo-text">
        <strong>Así como ellos tu también forma parte de la familia <span>Impulsa</span></strong>
      </p>
    </div>
  );
};

export default Promociones;

import React from 'react';
import './CardGrid.css';

const cards = [
  {
    title: 'Próximos grupos de estudio',
    image: '/images/grupo-estudio.jpg',
    icon: '👥',
  },
  {
    title: 'Simulacros y resultados',
    image: '/images/simulacros.jpg',
    icon: '📝',
  },
  {
    title: 'Exámenes de admisión',
    image: '/images/examenes.jpg',
    icon: '🏛️',
  },
  {
    title: 'Artículos de interés',
    image: '/images/articulos.jpg',
    icon: '📰',
  },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="card-content">
            <span className="icon">{card.icon}</span>
            <h3>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;

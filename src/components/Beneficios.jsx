import React from 'react';
import './Beneficios.css';

const beneficios = [
  { icon: '/icons/presenciales.svg', text: 'Clases 100% presenciales' },
  { icon: '/icons/practica.svg', text: 'Enseñanza fundamentalmente práctica' },
  { icon: '/icons/materiales.svg', text: 'Materiales interactivos' },
  { icon: '/icons/simulacros.svg', text: 'Exámenes y simulacros semanales' },
  { icon: '/icons/profesores.svg', text: 'Profesores especializados' },
  { icon: '/icons/asesoria.svg', text: 'Asesoramiento y acompañamiento' },
  { icon: '/icons/alumnos.svg', text: '30 alumnos por aula' },
  { icon: '/icons/progreso.svg', text: 'Información de progreso del estudiante' },
];

const Beneficios = () => {
  return (
    <div className="beneficios-container">
      <div className="beneficios-grid">
        {beneficios.map((item, index) => (
          <div className="beneficio" key={index}>
            <img src={item.icon} alt="" className="beneficio-icon" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beneficios;

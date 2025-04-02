import React from 'react';
import FormularioContacto from '../components/FormularioContacto';
import "./cursos.css";
const Cursos = () => {
  return (
    <div>
      <h1>Página de Cursos</h1>
      <p>Explora los cursos disponibles y mejora tus habilidades. empiezen el codigo </p>
      <h2>Contáctanos</h2>
      <p>Si tienes alguna consulta sobre los cursos, por favor llena el siguiente formulario:</p>
      <div className='datos'><FormularioContacto />
      
      </div>
      
    </div>
  );
};

export default Cursos;

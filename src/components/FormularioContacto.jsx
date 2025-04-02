import React, { useState } from 'react';
import './formulariocontac.css';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    alert('Formulario enviado correctamente');
    setFormData({
      nombre: '',
      apellidos: '',
      correo: '',
      telefono: '',
      mensaje: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="formulariop">
        <h1> Impulsa</h1>
        <label>Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formulariop">
        <label>Apellidos:</label>
        <input
          type="text"
          name="apellidos"
          value={formData.apellidos}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formulariop">
        <label>Correo Electrónico:</label>
        <input
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formulariop">
        <label>Teléfono:</label>
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div className="formulariop">
        <label>Mensaje:</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;

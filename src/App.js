import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Importa los componentes de las páginas
import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Ciclos from './pages/Ciclos';
import Nosotros from './pages/Nosotros';
import Examenes from './pages/Examenes';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/ciclos" element={<Ciclos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/examenes" element={<Examenes />} />
      </Routes>
    </Router>
  );
};

export default App;


import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Detalhes from '../Detalhes';
import Favoritos from '../Favoritos';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:name" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  );
}

export default AppRoutes;

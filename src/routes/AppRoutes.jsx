import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:name" element={<Detalhes />} />
    </Routes>
  );
}

export default AppRoutes;

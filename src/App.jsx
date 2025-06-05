import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">REST Countries</h1>
        <nav>
          <Link to="/" className="text-blue-600 underline mr-4">
            Home
          </Link>
          <Link to="/favoritos" className="text-blue-600 underline">
            Favoritos
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;

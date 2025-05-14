import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">REST Countries</h1>
      </header>
      <main className="p-4">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;

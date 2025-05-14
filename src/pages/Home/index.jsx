import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.log('Erro ao carregar países:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {countries.map((country) => (
        <Link 
          to={`/detalhes/${country.name.common}`} 
          key={country.cca3}
          className="border p-4 rounded shadow hover:shadow-lg"
        >
          <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-lg font-bold">{country.name.common}</h2>
          <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
          <p><strong>Região:</strong> {country.region}</p>
        </Link>
      ))}
    </div>
  );
}

import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavoritos } from '../context/FavoritosContext';

export default function Detalhes() {
  const { name } = useParams();
  const [country, setCountry] = useState(null);
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      .then((response) => setCountry(response.data[0]))
      .catch((error) => console.log('Erro ao carregar detalhes:', error));
  }, [name]);

  if (!country) return <p className="p-4">Carregando detalhes...</p>;

  const isFavorito = favoritos.some((item) => item.name.common === country.name.common);

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 underline">← Voltar</Link>
      <h1 className="text-2xl font-bold mt-4">{country.name.common}</h1>
      <img src={country.flags.svg} alt={country.name.common} className="w-60 my-4" />
      <p><strong>Nome Oficial:</strong> {country.name.official}</p>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>População:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Moedas:</strong> {country.currencies ? Object.values(country.currencies)[0].name : 'N/A'}</p>
      <p><strong>Idiomas:</strong> {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>

      <button
        onClick={() =>
          isFavorito ? removerFavorito(country.name.common) : adicionarFavorito(country)
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isFavorito ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
}

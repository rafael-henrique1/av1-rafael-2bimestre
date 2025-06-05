import { Link } from 'react-router-dom';

export default function CountryCard({ country }) {
  return (
    <Link
      to={`/detalhes/${country.name.common}`}
      className="border p-4 rounded shadow hover:shadow-lg"
    >
      <img
        src={country.flags.svg}
        alt={country.name.common}
        className="w-full h-40 object-cover mb-2"
      />
      <h2 className="text-lg font-bold">{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      <p><strong>Região:</strong> {country.region}</p>
    </Link>
  );
}

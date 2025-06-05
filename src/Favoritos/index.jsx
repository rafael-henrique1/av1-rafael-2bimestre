import { useFavoritos } from '../../context/FavoritosContext';
import CountryCard from '../../components/CountryCard';

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  if (favoritos.length === 0) {
    return <p className="p-4">Nenhum país favoritado.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {favoritos.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

import { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  const adicionarFavorito = (pais) => {
    if (!favoritos.find((item) => item.name.common === pais.name.common)) {
      setFavoritos([...favoritos, pais]);
    }
  };

  const removerFavorito = (nome) => {
    setFavoritos(favoritos.filter((item) => item.name.common !== nome));
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}

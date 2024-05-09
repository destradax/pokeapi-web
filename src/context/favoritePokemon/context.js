import { createContext, useContext } from 'react';

export const favoritePokemonContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {}
});

export const useFavorites = () => useContext(favoritePokemonContext);

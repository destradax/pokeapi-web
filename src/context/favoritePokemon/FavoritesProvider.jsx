import PropTypes from 'prop-types';
import { useState } from 'react';
import { favoritePokemonContext } from './context';

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = pokemonId => {
    if (!favorites.includes(pokemonId)) {
      setFavorites(ids => [...ids, pokemonId]);
    }
  };

  const removeFavorite = pokemonId => {
    if (favorites.includes(pokemonId)) {
      setFavorites(ids => ids.filter(id => id !== pokemonId));
    }
  };

  return (
    <favoritePokemonContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </favoritePokemonContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node
};

export default FavoritesProvider;

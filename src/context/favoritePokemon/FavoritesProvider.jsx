import useLocalStorage from 'hooks/useLocalStorage';
import PropTypes from 'prop-types';
import { favoritePokemonContext } from './context';

const FavoritesProvider = ({ children }) => {
  const { value: favorites, setValue: setFavorites } = useLocalStorage(
    'favorites',
    []
  );

  const addFavorite = pokemonId => {
    if (!favorites.includes(pokemonId)) {
      setFavorites([...favorites, pokemonId].sort());
    }
  };

  const removeFavorite = pokemonId => {
    if (favorites.includes(pokemonId)) {
      setFavorites(favorites.filter(id => id !== pokemonId));
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

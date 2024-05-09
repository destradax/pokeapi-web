import { getMultiplePokemonById } from 'api/pokemon';
import { useFavorites } from 'context/favoritePokemon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FavoritePokemon.module.scss';

const FavoritePokemon = () => {
  const navigate = useNavigate();

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const refreshFavoritesInfo = async () => {
      setPokemon(await getMultiplePokemonById(favorites));
    };

    refreshFavoritesInfo();
  }, [favorites]);

  const handleSelectPokemon = p => navigate(`/pokemon/${p.id}`);

  const handleToggleFavorite = (pokemonId, isFavorite) => {
    if (isFavorite) {
      addFavorite(pokemonId);
    } else {
      removeFavorite(pokemonId);
    }
  };

  return (
    <div>
      <h1>Favorites</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pokemon Name</th>
            <th>Favorite?</th>
          </tr>
        </thead>

        <tbody>
          {pokemon.map(p => {
            const isFavorite = favorites.includes(p.id);

            return (
              <tr key={p.name} onClick={() => handleSelectPokemon(p)}>
                <td>{p.name}</td>
                <td>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleToggleFavorite(p.id, !isFavorite);
                    }}
                  >
                    {isFavorite ? 'Yes' : 'No'}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritePokemon;

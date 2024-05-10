import { getMultiplePokemonById } from 'api/pokemon';
import clsx from 'clsx';
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
    <div className={clsx(styles.favoritePokemon)}>
      <h1>Favorite Pokemon</h1>

      <div className={styles.list}>
        <div className={clsx(styles.listItem, styles.listHeader)}>
          <div>Pokemon Name</div>
          <div>Favorite?</div>
        </div>

        {pokemon.map(p => {
          const isFavorite = favorites.includes(p.id);

          return (
            <div
              key={p.name}
              className={clsx(styles.listItem, styles.clickableListItem)}
              onClick={() => handleSelectPokemon(p)}
            >
              <div className={styles.pokemonName}>{p.name}</div>
              <button
                onClick={e => {
                  e.stopPropagation();
                  handleToggleFavorite(p.id, !isFavorite);
                }}
              >
                {isFavorite ? 'Yes' : 'No'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritePokemon;

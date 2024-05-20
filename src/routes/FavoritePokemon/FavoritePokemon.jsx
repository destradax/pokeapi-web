import clsx from 'clsx';
import { useFavorites } from 'context/favoritePokemon';
import { useNavigate } from 'react-router-dom';
import styles from './FavoritePokemon.module.scss';
import PokemonCard from './PokemonCard';

const FavoritePokemon = () => {
  const navigate = useNavigate();

  const { favorites } = useFavorites();

  const handleSelectPokemon = pokemonId => navigate(`/pokemon/${pokemonId}`);

  return (
    <div className={clsx(styles.favoritePokemon)}>
      <h1>Favorite Pokemon</h1>
      <div className={styles.grid}>
        {favorites.map(id => (
          <PokemonCard
            key={id}
            pokemonId={id}
            onClick={() => handleSelectPokemon(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePokemon;

import emptyStateImgSrc from 'assets/sad_pikachu.png';
import clsx from 'clsx';
import { useFavorites } from 'context/favoritePokemon';
import { Link, useNavigate } from 'react-router-dom';
import styles from './FavoritePokemon.module.scss';
import PokemonCard from './PokemonCard';

const FavoritePokemon = () => {
  const navigate = useNavigate();

  const { favorites } = useFavorites();

  const handleSelectPokemon = pokemonId => navigate(`/pokemon/${pokemonId}`);

  return (
    <div className={clsx(styles.favoritePokemon)}>
      <h1>Favorite Pokemon</h1>
      {favorites?.length ? (
        <div className={styles.grid}>
          {favorites.map(id => (
            <PokemonCard
              key={id}
              pokemonId={id}
              onClick={() => handleSelectPokemon(id)}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <img src={emptyStateImgSrc} alt="empty state" />
          <p>
            No favorites yet
            <br />
            please go to &nbsp;
            <Link to="/pokemon">Home</Link>
            &nbsp; and add some
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritePokemon;

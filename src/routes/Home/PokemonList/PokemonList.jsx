import PropTypes from 'prop-types';
import styles from './PokemonList.module.scss';

const PokemonList = ({
  pokemon,
  onSelectPokemon,
  favoritePokemon,
  onToggleFavorite
}) => {
  return (
    <table className={styles.pokemonList}>
      <thead>
        <tr>
          <th>Pokemon Name</th>
          <th>Favorite?</th>
        </tr>
      </thead>

      <tbody>
        {pokemon.map(p => {
          const isFavorite = favoritePokemon.includes(p.id);

          return (
            <tr key={p.name} onClick={() => onSelectPokemon(p)}>
              <td>{p.name}</td>
              <td>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onToggleFavorite(p.id, !isFavorite);
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
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  onSelectPokemon: PropTypes.func,
  favoritePokemon: PropTypes.array,
  onToggleFavorite: PropTypes.func
};

export default PokemonList;

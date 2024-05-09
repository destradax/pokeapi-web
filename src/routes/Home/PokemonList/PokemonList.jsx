import PropTypes from 'prop-types';
import styles from './PokemonList.module.scss';

const PokemonList = ({ pokemon }) => {
  return (
    <table className={styles.pokemonList}>
      <thead>
        <tr>
          <th>Pokemon Name</th>
          <th>Favorite?</th>
        </tr>
      </thead>

      <tbody>
        {pokemon.map(p => (
          <tr key={p.name}>
            <td>{p.name}</td>
            <td>false</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

PokemonList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string }))
};

export default PokemonList;

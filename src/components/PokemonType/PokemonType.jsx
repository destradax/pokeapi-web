import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './PokemonType.module.scss';

const PokemonType = ({ type }) => (
  <span className={clsx(styles.pokemonType, styles[type?.toLowerCase?.()])}>
    {type}
  </span>
);

PokemonType.propTypes = {
  type: PropTypes.string.isRequired
};

export default PokemonType;

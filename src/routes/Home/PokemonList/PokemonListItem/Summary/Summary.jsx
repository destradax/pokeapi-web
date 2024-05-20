import clsx from 'clsx';
import PokemonType from 'components/PokemonType';
import PropTypes from 'prop-types';
import styles from './Summary.module.scss';

const Summary = ({ pokemonData, className }) => {
  return (
    <div className={clsx(styles.summary, className)}>
      {pokemonData?.types?.map(type => {
        const typeName = type.type?.name;
        return <PokemonType key={typeName} type={typeName} />;
      })}
    </div>
  );
};

Summary.propTypes = {
  pokemonData: PropTypes.object,
  className: PropTypes.string
};

export default Summary;

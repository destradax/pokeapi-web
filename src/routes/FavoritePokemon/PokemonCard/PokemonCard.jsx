import { getPokemonDetails } from 'api/pokemon';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getPokemonArtworkUrl } from 'util/pokemon';
import styles from './PokemonCard.module.scss';

const PokemonCard = ({ pokemonId, onClick }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const refreshInfo = async () => {
      setPokemonData(await getPokemonDetails(pokemonId));
    };

    refreshInfo();
  }, [pokemonId]);

  return (
    <div className={styles.pokemonCard} onClick={onClick}>
      <img
        src={getPokemonArtworkUrl(pokemonData)}
        alt="artwork"
        className={styles.artwork}
      />
      <div className={styles.pokemonInfo}>
        <span className={styles.pokemonName}>{pokemonData?.name}</span>
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemonId: PropTypes.number.isRequired,
  onClick: PropTypes.func
};

export default PokemonCard;

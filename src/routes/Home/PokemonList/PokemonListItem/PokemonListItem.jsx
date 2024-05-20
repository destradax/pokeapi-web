import { getPokemonDetails } from 'api/pokemon';
import clsx from 'clsx';
import IconButton from 'components/IconButton';
import { HeartIcon } from 'icons';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getPokemonArtworkUrl } from 'util/pokemon';
import Avatar from './Avatar';
import styles from './PokemonListItem.module.scss';
import Summary from './Summary';

const PokemonListItem = ({
  pokemonId,
  name,
  onClick,
  onToggleFavorite,
  isFavorite
}) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const refreshInfo = async () => {
      setPokemonData(await getPokemonDetails(pokemonId));
    };

    refreshInfo();
  }, [pokemonId]);

  const handleToggleFavorite = event => {
    event.stopPropagation();
    onToggleFavorite(pokemonId, !isFavorite);
  };

  return (
    <div className={styles.pokemonListItem} onClick={onClick}>
      <Avatar
        url={getPokemonArtworkUrl(pokemonData)}
        className={styles.avatar}
      />

      <div className={styles.name}>{name}</div>

      <Summary pokemonData={pokemonData} className={styles.summary} />

      <IconButton
        onClick={handleToggleFavorite}
        className={styles.favoriteButton}
      >
        <HeartIcon
          className={clsx(styles.favoriteIcon, {
            [styles.isFavorite]: isFavorite
          })}
        />
      </IconButton>
    </div>
  );
};

PokemonListItem.propTypes = {
  pokemonId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onToggleFavorite: PropTypes.func,
  isFavorite: PropTypes.bool
};

export default PokemonListItem;

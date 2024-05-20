import { getPokemonDetails } from 'api/pokemon';
import clsx from 'clsx';
import PokemonType from 'components/PokemonType';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';
import { getPokemonImages, getPokemonStats } from './PokemonDetails.service';

const PokemonDetails = () => {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const refreshPokemonDetails = async () => {
      setPokemon(await getPokemonDetails(pokemonId));
    };

    if (pokemonId) {
      refreshPokemonDetails();
    }
  }, [pokemonId]);

  const images = getPokemonImages(pokemon);

  const stats = getPokemonStats(pokemon);

  return (
    <div className={clsx(styles.pokemonDetails, 'animated')}>
      <h1 className={styles.pokemonName}>{pokemon.name}</h1>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Types</div>

          <ul className={styles.infoList}>
            {pokemon.types?.map(type => {
              const typeName = type.type?.name;
              return (
                <li key={typeName}>
                  <PokemonType type={typeName} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Attributes</div>
          <ul className={styles.infoList}>
            <li>
              <span className={styles.itemName}>number:</span>&nbsp;{pokemon.id}
            </li>
            <li>
              <span className={styles.itemName}>height:</span>&nbsp;
              {pokemon.height}
            </li>
            <li>
              <span className={styles.itemName}>weight:</span>&nbsp;
              {pokemon.weight}
            </li>
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardTitle}>Stats</div>
          <ul className={styles.infoList}>
            {Object.entries(stats).map(([stat, value]) => (
              <li key={stat}>
                <span className={styles.itemName}>{stat}:</span>&nbsp;{value}
              </li>
            ))}
          </ul>
        </div>

        <div className={clsx(styles.card, styles.fullWidthCard)}>
          <div className={styles.cardTitle}>Moves</div>
          <ul className={clsx(styles.infoList, styles.moveList)}>
            {pokemon.moves?.map(move => {
              const name = move.move?.name;
              return <li key={name}>{name}</li>;
            })}
          </ul>
        </div>

        <div className={clsx(styles.card, styles.fullWidthCard)}>
          <div className={styles.cardTitle}>Gallery</div>
          <div className={styles.gallery}>
            {images.map(image => (
              <img key={image} src={image} className={styles.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

import { getPokemonDetails } from 'api/pokemon';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';
import { getPokemonImages } from './PokemonDetails.service';

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

  return (
    <div className={clsx(styles.pokemonDetails, 'animated')}>
      <h1>{pokemon.name}</h1>

      <div className={styles.content}>
        <dl className={styles.pokemonInfo}>
          <dt>Name</dt>
          <dd>{pokemon.name}</dd>

          <dt>Number</dt>
          <dd>{pokemon.id}</dd>

          <dt>Height</dt>
          <dd>{pokemon.height}</dd>

          <dt>Weight</dt>
          <dd>{pokemon.weight}</dd>

          <dt>Types</dt>
          {pokemon.types?.map(type => {
            const name = type.type?.name;
            return <dd key={name}>{name}</dd>;
          })}

          <dt>Moves</dt>
          {pokemon.moves?.map(move => {
            const name = move.move?.name;
            return <dd key={name}>{name}</dd>;
          })}
        </dl>

        <div className={styles.gallery}>
          {images.map((image, index) => (
            <img key={`${image}-${index}`} src={image} className={styles.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;

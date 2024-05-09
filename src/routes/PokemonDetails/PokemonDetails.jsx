import UserLayout from 'components/UserLayout';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './PokemonDetails.module.scss';

const PokemonDetails = () => {
  const { pokemonId } = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setPokemon({ id: pokemonId });
  }, [pokemonId]);

  return (
    <UserLayout>
      <h1>Pokemon &gt; {pokemon?.id}</h1>
      <pre className={styles.pre}>{JSON.stringify(pokemon)}</pre>
    </UserLayout>
  );
};

export default PokemonDetails;

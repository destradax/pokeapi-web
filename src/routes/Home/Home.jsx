import { getPokemonList } from 'api/pokemon';
import UserLayout from 'components/UserLayout';
import { useEffect, useState } from 'react';
import PokemonList from './PokemonList';

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const refreshPokemonList = async () => {
      const response = await getPokemonList();
      const data = await response.json();

      setPokemon(data.results);
    };

    refreshPokemonList();
  }, []);

  return (
    <UserLayout>
      <h1>Pokemon</h1>

      <PokemonList pokemon={pokemon} />
    </UserLayout>
  );
};

export default Home;

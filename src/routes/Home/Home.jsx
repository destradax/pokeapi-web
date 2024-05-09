import { getPokemonList } from 'api/pokemon';
import UserLayout from 'components/UserLayout';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonList from './PokemonList';

const Home = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const refreshPokemonList = async () => {
      const { pokemon: pokemonList } = await getPokemonList();
      setPokemon(pokemonList);
    };

    refreshPokemonList();
  }, []);

  const handleSelectPokemon = p => navigate(`/pokemon/${p.id}`);

  return (
    <UserLayout>
      <h1>Pokemon</h1>

      <PokemonList pokemon={pokemon} onSelectPokemon={handleSelectPokemon} />
    </UserLayout>
  );
};

export default Home;

import { getPokemonList } from 'api/pokemon';
import { useFavorites } from 'context/favoritePokemon';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PokemonList from './PokemonList';

const Home = () => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const refreshPokemonList = async () => {
      const { pokemon: pokemonList } = await getPokemonList();
      setPokemon(pokemonList);
    };

    refreshPokemonList();
  }, []);

  const handleSelectPokemon = p => navigate(`/pokemon/${p.id}`);

  const handleToggleFavorite = (pokemonId, isFavorite) => {
    if (isFavorite) {
      addFavorite(pokemonId);
    } else {
      removeFavorite(pokemonId);
    }
  };

  return (
    <div>
      <h1>Pokemon</h1>

      <PokemonList
        pokemon={pokemon}
        onSelectPokemon={handleSelectPokemon}
        favoritePokemon={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default Home;

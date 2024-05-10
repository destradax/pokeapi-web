import { useFavorites } from 'context/favoritePokemon';
import { useNavigate } from 'react-router-dom';
import PokemonList from './PokemonList';

const Home = () => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleSelectPokemon = p => navigate(`/pokemon/${p.id}`);

  const handleToggleFavorite = (pokemonId, isFavorite) => {
    if (isFavorite) {
      addFavorite(pokemonId);
    } else {
      removeFavorite(pokemonId);
    }
  };

  return (
    <div className="animated">
      <h1>Pokemon</h1>

      <PokemonList
        onSelectPokemon={handleSelectPokemon}
        favoritePokemon={favorites}
        onToggleFavorite={handleToggleFavorite}
      />
    </div>
  );
};

export default Home;

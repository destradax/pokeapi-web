import UserLayout from 'components/UserLayout';
import PokemonList from './PokemonList';
import MOCK_POKEMON from './mockPockemon.json';

const Home = () => {
  return (
    <UserLayout>
      <h1>Pokemon</h1>

      <PokemonList pokemon={MOCK_POKEMON} />
    </UserLayout>
  );
};

export default Home;

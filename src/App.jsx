import DefaultLayout from 'components/DefaultLayout';
import { FavoritesProvider } from 'context/favoritePokemon';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import FavoritePokemon from 'routes/FavoritePokemon';
import Home from 'routes/Home';
import Login from 'routes/Login';
import PokemonDetails from 'routes/PokemonDetails';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/pokemon/:pokemonId',
    element: <PokemonDetails />
  },
  {
    path: '/favorites',
    element: <FavoritePokemon />
  }
]);

const App = () => {
  return (
    <DefaultLayout>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </DefaultLayout>
  );
};

export default App;

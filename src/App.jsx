import DefaultLayout from 'components/DefaultLayout';
import UserLayout from 'components/UserLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
    path: '/dummy',
    element: <UserLayout>Dummy Page</UserLayout>
  }
]);

const App = () => {
  return (
    <DefaultLayout>
      <RouterProvider router={router} />
    </DefaultLayout>
  );
};

export default App;

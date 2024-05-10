import gsap from 'gsap';
import DefaultLayout from 'layouts/DefaultLayout';
import SessionLayout from 'layouts/SessionLayout';
import UserLayout from 'layouts/UserLayout';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import FavoritePokemon from 'routes/FavoritePokemon';
import Home from 'routes/Home';
import Login from 'routes/Login';
import PokemonDetails from 'routes/PokemonDetails';

const gsapLoader = () =>
  gsap.to('.animated', { opacity: 0, x: 300, duration: 0.3 });

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SessionLayout />}>
      <Route element={<DefaultLayout />}>
        <Route path="login?" element={<Login />} />
      </Route>
      <Route element={<UserLayout />}>
        <Route
          path="pokemon/:pokemonId"
          element={<PokemonDetails />}
          loader={gsapLoader}
        />
        <Route path="pokemon" element={<Home />} loader={gsapLoader} />
        <Route path="favorites" element={<FavoritePokemon />} />
      </Route>
    </Route>
  )
);

export default router;

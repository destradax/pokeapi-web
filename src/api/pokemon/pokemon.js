import { pokemonResponseToPokemonList } from './pokemon.service';

export const getPokemonList = async (page = 0, pageSize = 20) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${page * pageSize}`
  );
  const data = await response.json();
  return pokemonResponseToPokemonList(data);
};

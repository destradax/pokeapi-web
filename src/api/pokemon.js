export const getPokemonList = (page = 0, pageSize = 20) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${page * pageSize}`
  );

/**
 * Tries to get the pokemon ID from its URL string, asuming that the URL ends with `/pokemon/:pokemonId/`
 * @param {string} url The pokemon URL string
 * @returns the `pokemonId` if the URL matches the expected form, `null` otherwise
 */
export const getPokemonIDFromURL = url => {
  if (!url || !url.match(/\/pokemon\/\d+\/$/)) {
    return null;
  }

  const substrings = url.split('/');

  const id = Number(substrings[substrings.length - 2]);

  return id || null;
};

/**
 *
 * @param {array} pokemonResponse.results An array of pokemon in the form `{name: string, url: string}`
 * @param {number} pokemonResponse.count The total count of pokemon
 * @returns An object with `pokemonCount`, a number representing the total count of pokemon; and `pokemon`, an array of objects in the form `{id: number, name: string}`
 */
export const pokemonResponseToPokemonList = pokemonResponse => {
  const pokemon = (pokemonResponse.results ?? [])
    .map(p => {
      const id = getPokemonIDFromURL(p.url);

      if (!id) {
        console.warn('Could not get the pokemon ID from its URL:', p);
        return null;
      }

      return {
        id,
        name: p.name
      };
    })
    .filter(Boolean);

  return {
    pokemon,
    pokemonCount: pokemonResponse.count
  };
};

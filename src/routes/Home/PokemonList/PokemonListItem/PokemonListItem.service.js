export const getPokemonArtworkUrl = pokemonData => {
  return pokemonData?.sprites?.other?.['official-artwork']?.front_default;
};

export const getPokemonImages = pokemon => {
  const images = [];

  if (pokemon) {
    images.push(
      ...Object.values(pokemon.sprites?.other?.['official-artwork'] ?? {})
    );

    images.push(
      ...Object.values(pokemon.sprites?.other?.home ?? {})
    );

    images.push(
      ...Object.values(pokemon.sprites?.other?.['dream_world'] ?? {})
    )

    images.push(
      ...Object.values(pokemon.sprites ?? {}).filter(
        sprite => typeof sprite === 'string'
      )
    );
  }

  return images.filter(Boolean);
};

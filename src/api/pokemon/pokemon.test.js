import { describe, expect, it } from 'vitest';
import {
  getPokemonIDFromURL,
  pokemonResponseToPokemonList
} from './pokemon.service';

describe('pokemon API interface', () => {
  it('should be able to get the pokemon ID from its URL', () => {
    expect(getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/1/')).toBe(1);
    expect(getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/150/')).toBe(
      150
    );
    expect(
      getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/a/')
    ).toBeNull();
    expect(
      getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/a150/')
    ).toBeNull();
    expect(
      getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/1a50/')
    ).toBeNull();
    expect(
      getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/150a/')
    ).toBeNull();
    expect(
      getPokemonIDFromURL('https://pokeapi.co/api/v2/pokemon/150a/')
    ).toBeNull();
    expect(getPokemonIDFromURL('procotol://host/path/pokemon/123/')).toBe(123);
  });

  it('should transform the server response', () => {
    const mockResponse = {
      count: 123,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/'
        },
        {
          name: 'malformedPokemon',
          url: 'https://57blocks.io/'
        }
      ]
    };

    const expectedResult = {
      pokemonCount: 123,
      pokemon: [
        { id: 1, name: 'bulbasaur' },
        {
          id: 2,
          name: 'ivysaur'
        }
      ]
    };

    expect(pokemonResponseToPokemonList(mockResponse)).toEqual(expectedResult);
  });
});

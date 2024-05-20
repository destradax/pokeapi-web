import { getPokemonList } from 'api/pokemon';
import AutocompleteInput from 'components/AutocompleteInput';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './PokemonList.module.scss';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({
  onSelectPokemon,
  favoritePokemon,
  onToggleFavorite
}) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonCount, setPokemonCount] = useState(0);
  const [search, setSearch] = useState('');

  const loadPage = async pageNumber => {
    const { pokemon, pokemonCount: totalCount } =
      await getPokemonList(pageNumber);
    setPokemonList([...pokemonList, ...pokemon]);
    if (totalCount !== pokemonCount) {
      setPokemonCount(totalCount);
    }
  };

  useEffect(() => {
    loadPage(0);

    return () => {
      setPokemonList([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPokemonList = search
    ? pokemonList.filter(({ name }) => name.includes(search))
    : pokemonList;

  return (
    <div className={styles.pokemonList}>
      <AutocompleteInput
        value={search}
        onChange={setSearch}
        suggestions={pokemonList.map(({ name }) => name)}
        placeholder="Filter by name"
        className={styles.searchInput}
      />

      <div className={styles.list}>
        <InfiniteScroll
          loadMore={loadPage}
          hasMore={!search && pokemonList.length < pokemonCount}
          loader={<div key="loader">Loading ...</div>}
          useWindow={false}
        >
          {filteredPokemonList.map(pokemon => {
            const isFavorite = favoritePokemon.includes(pokemon.id);

            return (
              <PokemonListItem
                key={pokemon.id}
                pokemonId={pokemon.id}
                name={pokemon.name}
                onClick={() => onSelectPokemon(pokemon)}
                isFavorite={isFavorite}
                onToggleFavorite={onToggleFavorite}
              />
            );
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

PokemonList.propTypes = {
  onSelectPokemon: PropTypes.func,
  favoritePokemon: PropTypes.array,
  onToggleFavorite: PropTypes.func
};

export default PokemonList;

import { getPokemonList } from 'api/pokemon';
import ComboBox from 'components/ComboBox';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styles from './PokemonList.module.scss';

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
    <>
      <ComboBox value={search} onChange={setSearch} />

      <div className={styles.list}>
        <div className={styles.header}>
          <div>Pokemon Name</div>
        </div>
        <InfiniteScroll
          loadMore={loadPage}
          hasMore={!search && pokemonList.length < pokemonCount}
          loader={<div key="loader">Loading ...</div>}
          useWindow={false}
        >
          {filteredPokemonList.map(pokemon => {
            const isFavorite = favoritePokemon.includes(pokemon.id);
            return (
              <div
                key={pokemon.id}
                className={styles.listItem}
                onClick={() => onSelectPokemon(pokemon)}
              >
                <div>{pokemon.name}</div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    onToggleFavorite(pokemon.id, !isFavorite);
                  }}
                >
                  {isFavorite ? 'Yes' : 'No'}
                </button>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
};

PokemonList.propTypes = {
  onSelectPokemon: PropTypes.func,
  favoritePokemon: PropTypes.array,
  onToggleFavorite: PropTypes.func
};

export default PokemonList;

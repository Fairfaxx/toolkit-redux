import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemoApp = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  const isLoading = useSelector((state) => state.pokemons.isLoading);
  const page = useSelector((state) => state.pokemons.page);
  console.log(page);

  useEffect(() => {
    dispatch(getPokemons());
  }, [getPokemons]);

  return (
    <>
      <h1>PokemoApp</h1>
      <hr />
      <span>{isLoading ? <h3>Loading...</h3> : null}</span>
      <ul>
        {pokemons.map((e, i) => (
          <li style={{ listStyleType: 'none' }} key={i}>
            {i + 1} - {e.name}
          </li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => {
          dispatch(getPokemons(page + 1));
        }}
      >
        Next Page
      </button>
    </>
  );
};

export default PokemoApp;

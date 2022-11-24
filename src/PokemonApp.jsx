import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemoApp = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons.pokemons);
  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>PokemoApp</h1>
      <hr />
      <ul>
        {pokemons.map((e, i) => (
          <li key={i}>{e.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemoApp;

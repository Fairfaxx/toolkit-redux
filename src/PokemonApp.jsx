import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);
  return (
    <>
      <h1>PokemoApp</h1>
      <hr />
      <ul>
        <li>Hi</li>
        <li>Hi</li>
        <li>Hi</li>
      </ul>
    </>
  );
};

export default PokemoApp;

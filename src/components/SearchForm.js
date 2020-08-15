import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAblum } from '../redux/actions';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(searchAblum(name));
  };

  return (
    <form onSubmit={submitForm}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAblum } from '../redux/actions';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(searchAblum(name));
  };

  return (
    <form onSubmit={submitForm} className={styles.form}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

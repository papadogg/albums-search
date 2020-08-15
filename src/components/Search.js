import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchForm from './SearchForm';
import AlbumsList from './AlbumsList';
import { clearSearch } from '../redux/actions';
import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);
  const error = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    return () => dispatch(clearSearch());
  }, [dispatch]);

  return (
    <div>
      <h1>Search</h1>
      <SearchForm />
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <AlbumsList albums={albums} />
      )}
      {error && <p className={styles.loading}>{error}</p>}
    </div>
  );
};

export default Search;

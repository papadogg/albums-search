import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchForm from './SearchForm';
import AlbumsList from './AlbumsList';
import { clearSearch } from '../redux/actions';

const Search = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    return () => dispatch(clearSearch());
  }, [dispatch]);

  return (
    <div>
      <SearchForm />
      <AlbumsList albums={albums} />
    </div>
  );
};

export default Search;

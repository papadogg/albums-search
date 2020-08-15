import React from 'react';
import { useSelector } from 'react-redux';
import AlbumsList from './AlbumsList';

const MyAlbums = () => {
  const myAlbums = useSelector((state) => state.myAlbums);
  return <AlbumsList albums={myAlbums} />;
};

export default MyAlbums;

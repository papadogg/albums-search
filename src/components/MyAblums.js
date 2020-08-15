import React from 'react';
import { useSelector } from 'react-redux';
import AlbumsList from './AlbumsList';

const MyAlbums = () => {
  const myAlbums = useSelector((state) => state.myAlbums);
  return (
    <div>
      <h1>My albums</h1>
      <AlbumsList albums={myAlbums} />
    </div>
  );
};

export default MyAlbums;

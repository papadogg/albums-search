import React from 'react';
import AlbumsListItem from './AlbumsListItem';
import styles from './AlbumsList.module.css';

const AlbumsList = ({ albums = [] }) => {
  return (
    <ul className={styles.list}>
      {albums.map((album) => (
        <AlbumsListItem key={album.id} album={album} />
      ))}
    </ul>
  );
};

export default AlbumsList;

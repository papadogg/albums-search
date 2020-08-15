import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAlbum, deleteAlbum } from '../redux/actions';
import styles from './AlbumsListItem.module.css';

const AlbumsListItem = ({ album = {} }) => {
  const dispatch = useDispatch();
  const myAlbums = useSelector((state) => state.myAlbums);

  const addToCollection = () => {
    dispatch(addAlbum(album));
  };

  const deleteFromCollection = () => {
    dispatch(deleteAlbum(album));
  };

  const isInCollection = !!myAlbums.find((item) => item.id === album.id);

  return (
    <li>
      <span>
        {album.artist} - {album.title}
      </span>
      {isInCollection ? (
        <button className={styles.button} onClick={deleteFromCollection}>
          Delete from collection
        </button>
      ) : (
        <button className={styles.button} onClick={addToCollection}>
          Add to collection
        </button>
      )}
    </li>
  );
};

export default AlbumsListItem;

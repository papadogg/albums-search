import React from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum, deleteAlbum } from '../redux/actions';

const AlbumsList = ({ albums = [] }) => {
  console.log(albums);
  const dispatch = useDispatch();

  const addToCollection = (album) => {
    dispatch(addAlbum(album));
  };

  const deleteFromCollection = (album) => {
    dispatch(deleteAlbum(album));
  };

  return (
    <div>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <span>
              {album.artist} - {album.title}
            </span>
            <button onClick={() => addToCollection(album)}>
              Add to collection
            </button>
            <button onClick={() => deleteFromCollection(album)}>
              Delete from collection
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumsList;

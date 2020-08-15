import * as albumTypes from './types';

import axios from 'axios';

export const addAlbum = (album) => ({
  type: albumTypes.ADD_ALBUM,
  payload: album,
});

export const deleteAlbum = (album) => ({
  type: albumTypes.DELETE_ABLUM,
  payload: album,
});

export const clearSearch = () => ({
  type: albumTypes.SEARCH_CLEAR,
});

export const searchAblum = (name) => {
  return async (dispatch) => {
    dispatch(searchAblumStarted());

    try {
      const { data } = await axios.get(
        `https://musicbrainz.org/ws/2/release?query=${name}`
      );
      const albums = data.releases.map((release) => ({
        id: release.id,
        title: release.title,
        artist: release['artist-credit'][0].name,
      }));
      dispatch(searchAlbumSuccess(albums));
    } catch (error) {
      dispatch(searchAlbumFailure());
      console.log(error);
    }
  };
};

const searchAblumStarted = () => ({
  type: albumTypes.SEARCH_ABLUM_STARTED,
});

const searchAlbumSuccess = (albums) => ({
  type: albumTypes.SEARCH_ABLUM_SUCCESS,
  payload: albums,
});

const searchAlbumFailure = () => ({
  type: albumTypes.SEARCH_ABLUM_FAILURE,
  payload: 'Error searching for album. Try again',
});

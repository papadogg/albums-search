import * as albumTypes from './types';

const initialState = {
  myAlbums: JSON.parse(localStorage.getItem('myAlbums')) || [],
  albums: [],
  loading: false,
  error: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case albumTypes.SEARCH_ABLUM_STARTED:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case albumTypes.SEARCH_ABLUM_SUCCESS:
      return {
        ...state,
        albums: action.payload,
        loading: false,
        error: '',
      };
    case albumTypes.SEARCH_ABLUM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case albumTypes.ADD_ALBUM:
      return {
        ...state,
        myAlbums: [...state.myAlbums, action.payload],
      };
    case albumTypes.DELETE_ABLUM:
      return {
        ...state,
        myAlbums: state.myAlbums.filter(
          (album) => album.id !== action.payload.id
        ),
      };
    case albumTypes.SEARCH_CLEAR:
      return {
        ...state,
        albums: [],
      };
    default:
      return state;
  }
}

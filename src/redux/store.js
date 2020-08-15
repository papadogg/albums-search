import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';
import { saveToLocalStore } from './helpers';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  saveToLocalStore(store.getState().myAlbums);
});

export default store;

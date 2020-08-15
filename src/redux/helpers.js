export const saveToLocalStore = (state) => {
  localStorage.setItem('myAlbums', JSON.stringify(state));
};

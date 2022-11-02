import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const favoritSlice = createSlice({
  name: 'favorit',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const isFav = state.items.find(item => item.id === action.payload.id);
      if (!isFav) {
        state.items.push({...action.payload});
      }
    },
    removeFromFavorites: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        console.warn(
          `cant remove movie ${action.payload.id} as its not in Fevorites`,
        );
      }
    },
  },
});

export const {addToFavorites, removeFromFavorites} = favoritSlice.actions;

export const selectFavoritMovies = (state) => state.favorit.items;

export const selectFavoritMovieWithId = (state, id) =>
  state.favorit.items.find(item => item.id === id);

export const isFavMovieSelector = (state, id) =>
  state.favorit.items.find(m => m.id === id) != undefined;

export default favoritSlice.reducer;

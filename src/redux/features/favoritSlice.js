import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
  };

  export const favoritSlice = createSlice({
    name: "favorit",
    initialState,
    reducers: {
      addToFavorites: (state, action) => {
        state.items = [...state.items, action.payload];
      },
      removeFromFavorites: (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        let newFevorites = [...state.items];
        if (index >= 0) {
            newFevorites.splice(index, 1);
        } else {
          console.warn(
            `cant remove movie ${action.payload.id} as its not in Fevorites`
          );
        }
        state.items = newFevorites;
      },
    },
  });

  export const { addToFavorites, removeFromFavorites } = favoritSlice.actions;

  export const selectFavoritMovie = (state) => state.favorit.items;

  export const selectFavoritMovieWithId = (state, id) =>
  state.favorit.items.filter((item) => item.id === id);



  export default favoritSlice.reducer;

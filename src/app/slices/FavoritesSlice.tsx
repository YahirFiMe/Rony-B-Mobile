import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Api from '../../API/Api'

export interface CounterState {
  Favorites: any[]
}

const initialState: CounterState = {
  Favorites: []
}

export const FavoritesSlice = createSlice({
  name: 'Favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.Favorites = [...state.Favorites, action.payload]
    },

    removeFromFavorites: (state, action) => {
      const index = state.Favorites.findIndex(
        (Favorites) => Favorites.id === action.payload.id
      );

      let newFavorites = [...state.Favorites];

      if (index >= 0) {
        newFavorites.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in Favorites`
        );
      }

      state.Favorites = newFavorites;
    },
    cleanFavorites: (state, action) => {
      state.Favorites = [];
    },


  },
},
)

export const { addToFavorites, removeFromFavorites, cleanFavorites } = FavoritesSlice.actions

// Action creators are generated for each case reducer function

export default FavoritesSlice.reducer

export const selectFavoritesItems = (state: any) => state.Favorites.items;


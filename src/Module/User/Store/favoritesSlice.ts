import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavoritesResponse } from '@/Module/User/Model';

interface favoritesSlice {
  favorites: IFavoritesResponse[];
}

const initialState: favoritesSlice = {
  favorites: [],
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<IFavoritesResponse[]>) => {
      state.favorites = action.payload;
    },
    addFavorites: (state, action: PayloadAction<IFavoritesResponse>) => {
      const foundedFavorite = state.favorites.find((favorite) => favorite.name === action.payload.name);
      if (!foundedFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, action: PayloadAction<IFavoritesResponse>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.name !== action.payload.name,
      );
    },
  },
});

export const { setFavorites, addFavorites, removeFavorites } = favoritesReducer.actions;
export default favoritesReducer.reducer;

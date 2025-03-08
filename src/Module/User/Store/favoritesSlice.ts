import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/Module/User/Model';

interface favoritesSlice {
  favorites: IUser[];
}

const initialState: favoritesSlice = {
  favorites: [],
};

const favoritesReducer = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<IUser[]>) => {
      state.favorites = action.payload;
    },
    addFavorites: (state, action: PayloadAction<IUser>) => {
      const foundedFavorite = state.favorites.find((favorite) => favorite.name === action.payload.name);
      if (!foundedFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFavorites: (state, action: PayloadAction<IUser>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.name !== action.payload.name,
      );
    },
  },
});

export const { setFavorites, addFavorites, removeFavorites } = favoritesReducer.actions;
export default favoritesReducer.reducer;

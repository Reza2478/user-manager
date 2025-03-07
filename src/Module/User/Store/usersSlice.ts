import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFavoritesResponse, IUser } from '@/Module/User/Model';

interface usersSlice {
  users: IUser[];
  searchValue: string;
}

const initialState: usersSlice = {
  users: [],
  searchValue: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<{ users: IUser[], favorites: IFavoritesResponse[] }>) => {
      state.users = action.payload.users?.map(user => ({
        ...user,
        isFavorite: !!action.payload.favorites.find(fav => fav.name === user.name),
      }));
    },
    filterUsers: (state, action: PayloadAction<string>) => {
      console.log('aaaaa', action.payload, state.users);
      console.log('aa', state.users.find(user => user.name.includes(action.payload)));
      state.users = state.users.filter(user => user.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()));
    },
  },
});

export const { setUsers, filterUsers } = usersSlice.actions;
export default usersSlice.reducer;

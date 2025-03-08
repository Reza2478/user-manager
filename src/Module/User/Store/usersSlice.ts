import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@/Module/User/Model';

interface usersSlice {
  users: IUser[];
}

const initialState: usersSlice = {
  users: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<{ users: IUser[], favorites: IUser[] }>) => {
      state.users = action.payload.users?.map(user => ({
        ...user,
        isFavorite: !!action.payload.favorites.find(fav => fav.name === user.name),
      }));
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;

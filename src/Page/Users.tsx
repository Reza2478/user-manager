import { Button, Fab, Stack, TextField, Typography } from '@mui/material';
import { useGetFavoritesQuery, useGetUsersQuery } from '@/Module/User/Query';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/Module/Core/Store';
import { addFavorites, removeFavorites, setFavorites, setUsers } from '@/Module/User/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import debounce from 'lodash.debounce';

function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const favoritesState = useSelector((state: RootState) => state.favorites.favorites);
  const usersState = useSelector((state: RootState) => state.users.users);

  const { data: users, isLoading: usersLoading } = useGetUsersQuery();
  const { data: favorites, isLoading: favoritesLoading } = useGetFavoritesQuery(undefined, {
    skip: favoritesState.length > 0,
  });
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    if (favorites)
      dispatch(setFavorites(favorites));
  }, [dispatch, favorites]);

  useEffect(() => {
    if (users)
      dispatch(setUsers({ users: users, favorites: favoritesState }));
  }, [dispatch, users, favoritesState]);

  useEffect(() => {
    const filteredUser = users?.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filteredUser)
      dispatch(setUsers({ users: filteredUser, favorites: favoritesState }));
  }, [searchTerm]);

  const updatedQuery = e => setSearchTerm(e.target.value);
  const debouncedOnChange = debounce(updatedQuery, 200);

  if (usersLoading || favoritesLoading) return <Typography>Loading ...</Typography>;

  return (
    <>
      <TextField
        label="جستجو..."
        variant="outlined"
        fullWidth
        type={'text'}
        onChange={debouncedOnChange}
      />
      {usersState?.map((user) => (
        <Stack direction={'row'} spacing={4} key={user.id}>
          <Typography variant={'h6'}>{user.name}</Typography>
          {user.isFavorite ?
            <Fab onClick={() => dispatch(removeFavorites(user as any))} color={'primary'} size={'small'}>
              <FavoriteIcon />
            </Fab> : <Button onClick={() => dispatch(addFavorites(user as any))}>افزودن</Button>}
        </Stack>
      ))}
    </>
  );
}

export default Users;
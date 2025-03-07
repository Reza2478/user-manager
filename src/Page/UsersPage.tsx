import { Container, Stack, Typography } from '@mui/material';
import { useGetFavoritesQuery, useGetUsersQuery } from '@/Module/User/Query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/Module/Core/Store';
import { setFavorites, setUsers } from '@/Module/User/Store';
import { SearchUsers, Users } from '@/Module/User/Component';

function UsersPage() {
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


  if (usersLoading || favoritesLoading) return <Typography>Loading ...</Typography>;

  return (
    <Container style={{ padding: '10px' }}>
      <Stack
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
      >
        <Typography variant={'h6'} color={'primary'}>
          نرم افزار مدیریت کابران
        </Typography>
        <SearchUsers />
        <Users />
        {/*{usersState?.map((user) => (*/}
        {/*  <Stack direction={'row'} spacing={4} key={user.id}>*/}
        {/*    <Typography variant={'h6'}>{user.name}</Typography>*/}
        {/*    {user.isFavorite ?*/}
        {/*      <Fab onClick={() => dispatch(removeFavorites(user as any))} color={'primary'} size={'small'}>*/}
        {/*        <FavoriteIcon />*/}
        {/*      </Fab> : <Button onClick={() => dispatch(addFavorites(user as any))}>افزودن</Button>}*/}
        {/*  </Stack>*/}
        {/*))}*/}
      </Stack>

    </Container>
  );
}

export default UsersPage;
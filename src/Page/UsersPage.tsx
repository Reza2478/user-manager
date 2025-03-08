import { Container, Stack, Typography } from '@mui/material';
import { useGetFavoritesQuery, useGetUsersQuery } from '@/Module/User/Query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/Module/Core/Store';
import { setFavorites, setUsers } from '@/Module/User/Store';
import { SearchUsers, Users } from '@/Module/User/Component';

function UsersPage() {
  const favoritesState = useSelector((state: RootState) => state.favorites.favorites);

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
    <Container className={'my-20'}>
      <Stack
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        spacing={3}
      >
        <Typography color={'primary'} variant={'h5'} fontWeight={'bold'}>
          نرم افزار مدیریت کاربران
        </Typography>
        <SearchUsers />
        <Users />
      </Stack>

    </Container>
  );
}

export default UsersPage;
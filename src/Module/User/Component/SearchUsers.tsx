import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';
import { ChangeEvent, useEffect, useState } from 'react';
import { useGetUsersQuery } from '@/Module/User/Query';
import { setUsers } from '@/Module/User/Store';
import { AppDispatch, RootState } from '@/Module/Core/Store';
import { useDispatch, useSelector } from 'react-redux';

function SearchUsers() {
  const [searchValue, setSearchValue] = useState('');
  const { data: users } = useGetUsersQuery();
  const favoritesState = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const filteredUser = users?.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
    if (filteredUser)
      dispatch(setUsers({ users: filteredUser, favorites: favoritesState }));
  }, [searchValue]);

  const updatedQuery = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);
  const debouncedOnChange = debounce(updatedQuery, 200);
  return <TextField
    autoComplete={'off'}
    label="جستجوی کاربران"
    variant="outlined"
    type={'text'}
    size={'small'}
    onChange={debouncedOnChange}
  />;
}

export default SearchUsers;
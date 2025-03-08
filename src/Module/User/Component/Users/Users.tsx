import { Grid2, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/Module/Core/Store';
import { UserCard } from '@/Module/User/Component';

function Users() {
  const users = useSelector((state: RootState) => state.users.users);

  if (!users.length)
    return <Typography color={'red'}>
      کاربری با این نام یافت نشد !
    </Typography>;

  return (
    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {users.map((user) => (
        <Grid2 key={user.id} size={{ xs: 4, sm: 4, md: 4 }}>
          <UserCard userDetails={user} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Users;
import { Grid2 } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/Module/Core/Store';
import { UserCard } from '@/Module/User/Component';

function Users() {
  const users = useSelector((state: RootState) => state.users.users);

  return (
    <Grid2 container spacing={4}>
      {users.map((user) => (
        <Grid2 key={user.id}>
          <UserCard userDetails={user} />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default Users;
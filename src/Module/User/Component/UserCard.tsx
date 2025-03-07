import { Avatar, Stack, Typography } from '@mui/material';
import { IUser } from '@/Module/User/Model';

interface IUserCardProps {
  userDetails: IUser;
}

function UserCard({ userDetails }: IUserCardProps) {

  return (
    <Stack style={{ padding: '5px', boxShadow: '2px', borderRadius: '20px', backgroundColor: 'white' }}>
      <Typography>{userDetails.name}</Typography>
      <Avatar src={userDetails.avatar} alt={'user-avatar'} />
    </Stack>
  );
}

export default UserCard;
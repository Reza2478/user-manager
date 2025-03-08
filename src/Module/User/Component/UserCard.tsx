import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import { IUser } from '@/Module/User/Model';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/Module/Core/Store';
import { addFavorites, removeFavorites } from '@/Module/User/Store';

interface IUserCardProps {
  userDetails: IUser;
}

function UserCard({ userDetails }: IUserCardProps) {

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Card sx={{ minWidth: '300px' }}>
      <CardHeader
        avatar={
          <Avatar src={userDetails.avatar} alt="user-avatar" />
        }
        title={userDetails.name}
        action={
          userDetails.isFavorite ? <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={() => dispatch(removeFavorites(userDetails))}
              className={'text-red-500'}
            />
          </IconButton> : <IconButton aria-label="add to favorites">
            <FavoriteBorderOutlinedIcon
              onClick={() => dispatch(addFavorites(userDetails))}
              className={'text-red-500'}
            />
          </IconButton>
        }
      />
    </Card>
  );
}

export default UserCard;
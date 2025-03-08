import { Card, CardHeader, Skeleton } from '@mui/material';

function UserCardSkeleton() {
  return (
    <Card sx={{ minWidth: '300px' }}>
      <CardHeader
        avatar={
          <Skeleton variant={'circular'} width={40} height={40} />
        }
        title={<Skeleton width={230} variant="text" sx={{ fontSize: '1rem' }} />}
        action={
          <Skeleton variant="circular" width={20} height={20} />
        }
      />
    </Card>
  );
}

export default UserCardSkeleton;
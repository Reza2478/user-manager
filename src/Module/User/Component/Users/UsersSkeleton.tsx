import { Grid2 } from '@mui/material';
import { UserCardSkeleton } from '@/Module/User/Component';

const COUNT = 20;

function UsersSkeleton() {
  return (
    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from({ length: COUNT }).map((_, index) => (
        <Grid2 key={index} size={{ xs: 4, sm: 4, md: 4 }}>
          <UserCardSkeleton />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default UsersSkeleton;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/Module/User/Model';
import { UserService } from '@/Module/User/Service';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'unused' }),
  endpoints: build => ({
    getUsers: build.query<IUser[], void>({
      queryFn: () => UserService.getUsers().then(data => data),
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
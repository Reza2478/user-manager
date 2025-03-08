import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/Module/User/Model';
import { USER_API } from '@/Module/User/Constant';
import { customBaseQuery } from '@/Module/Core/Service';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: customBaseQuery,
  endpoints: build => ({
    getUsers: build.query<IUser[], void>({
      query: () => USER_API.GET_USERS,
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
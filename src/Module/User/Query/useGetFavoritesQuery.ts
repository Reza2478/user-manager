import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserService } from '@/Module/User/Service';
import { IUser } from '@/Module/User/Model';

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'unused' }),
  endpoints: build => ({
    getFavorites: build.query<IUser[], void>({
      queryFn: () => UserService.getFavorites().then(data => data),
    }),
  }),
});

export const { useGetFavoritesQuery } = favoritesApi;
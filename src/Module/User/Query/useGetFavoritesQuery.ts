import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFavoritesResponse } from '@/Module/User/Model';
import { UserService } from '@/Module/User/Service';

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'unused' }),
  endpoints: build => ({
    getFavorites: build.query<IFavoritesResponse[], void>({
      queryFn: () => UserService.getFavorites().then(data => data),
    }),
  }),
});

export const { useGetFavoritesQuery } = favoritesApi;
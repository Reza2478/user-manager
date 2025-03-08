import { createApi } from '@reduxjs/toolkit/query/react';
import { IUser } from '@/Module/User/Model';
import { USER_API } from '@/Module/User/Constant';
import { customBaseQuery } from '@/Module/Core/Service';

export const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: customBaseQuery,
  endpoints: build => ({
    getFavorites: build.query<IUser[], void>({
      query: () => USER_API.GET_FAVORITES,
    }),
  }),
});

export const { useGetFavoritesQuery } = favoritesApi;
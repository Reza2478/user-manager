import { BaseQueryFn, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { API_BASE, SERVICE_GLOBAL_ERROR } from '@/Module/Core/Constant';
import { toast } from 'react-toastify';

interface CustomError {
  status: number;
  data?: { message?: string };
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE,
});

const customBaseQuery: BaseQueryFn<string | {
  url: string;
  method: string;
  body?: unknown
}, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    const error = result.error as CustomError;
    if (error.status === 404) {
      toast.error('آدرس مد نظر یافت نشد!');
    } else {
      toast.error(SERVICE_GLOBAL_ERROR);
    }
  }
  return result;
};

export default customBaseQuery;
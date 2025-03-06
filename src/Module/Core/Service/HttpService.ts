import axios from 'axios';
import { ServiceBuilder } from 'ts-retrofit3';

import { API_BASE, SERVICE_GLOBAL_ERROR } from '@/Module/Core/Constant';
import { toast } from 'react-toastify';

export const axiosInstance = axios.create({});

axiosInstance.interceptors.response.use(
  config => {
    return config;
  },
  failedRequest => {
    const { response, config, code } = failedRequest;

    if (!config?.extraMap?.disabledAutoError && code !== 'ERR_CANCELED') {
      const message = response?.data?.errors?.[0] || SERVICE_GLOBAL_ERROR;
      toast.error(
        message,
      );
    }

    return Promise.reject(failedRequest);
  },
);

axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error),
);

export default new ServiceBuilder().setEndpoint(API_BASE).setStandalone(axiosInstance as any);

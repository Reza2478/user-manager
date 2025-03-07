import { BaseService, GET, Signal } from 'ts-retrofit3';

import { HttpService } from '@/Module/Core/Service';
import { USER_API } from '@/Module/User/Constant';
import { IFavoritesResponse, IUser } from '@/Module/User/Model';
import { IResponse } from '@/Module/Core/Model';

class UserService extends BaseService {
  @GET(USER_API.GET_USERS)
  async getUsers(@Signal _signal?: AbortSignal): Promise<IResponse<IUser[]>> {
    return <IResponse>{};
  }

  @GET(USER_API.GET_FAVORITES)
  async getFavorites(@Signal _signal?: AbortSignal): Promise<IResponse<IFavoritesResponse[]>> {
    return <IResponse>{};
  }
}

export default HttpService.build(UserService);

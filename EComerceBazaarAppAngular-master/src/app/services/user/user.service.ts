import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UserDetailResponseContract } from 'src/app/models/models/contracts/users/user-detail-response-contract';
import { HttpClientRequest } from 'src/app/models/models/dtos/httpclient/HttpClientRequest';
import { ResponseTypeEnum } from 'src/app/models/models/enums/httpclient/response-type-enum';
import { HttpClientService } from '../httpclient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(@Inject("baseUrl") private baseUrl:string,private _httpClientService:HttpClientService) { }

  public async getUserDetail(username:string):Promise<UserDetailResponseContract>{
    let request:HttpClientRequest=new HttpClientRequest();
    request.url=this.baseUrl;
    request.controller='bazaar';
    request.action='profile';
    request.pathVariable=`${username}`;

    return await firstValueFrom(this._httpClientService.get(request,ResponseTypeEnum.Json));
  }
}

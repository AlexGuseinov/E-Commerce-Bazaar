import { Inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LoginContract } from 'src/app/models/models/contracts/auths/login-contract';
import { LoginResponseContract } from 'src/app/models/models/contracts/auths/login-response-contract';
import { RegisterContract } from 'src/app/models/models/contracts/auths/register-contract';
import { HttpClientRequest } from 'src/app/models/models/dtos/httpclient/HttpClientRequest';
import { ResponseTypeEnum } from 'src/app/models/models/enums/httpclient/response-type-enum';
import { HttpClientService } from '../httpclient/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(@Inject("baseUrl") private baseUrl:string,private _httpClientService:HttpClientService) { }

  public async login(contract:Partial<LoginContract>):Promise<LoginResponseContract>{
    let request:HttpClientRequest=new HttpClientRequest();
    request.url=this.baseUrl;
    request.controller="bazaar/security";
    request.action="auth/authenticate";

    return await firstValueFrom(this._httpClientService.post(request,contract,ResponseTypeEnum.Json));
  }

  public async register(contract:Partial<RegisterContract>):Promise<LoginResponseContract>{
    let request:HttpClientRequest=new HttpClientRequest();
    request.url=this.baseUrl;
    request.controller="bazaar/security";
    request.action="auth/register";

    return await firstValueFrom(this._httpClientService.post(request,contract,ResponseTypeEnum.Json));
  }

}

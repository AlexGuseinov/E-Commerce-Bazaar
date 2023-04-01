import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtPayload } from 'src/app/models/models/dtos/jwt/jwt-payload';
import { LocalStorageService } from '../localStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private _jwtHelperService:JwtHelperService,
    private _locahStorageService:LocalStorageService) { }

  getPaylod():JwtPayload{
    return this._jwtHelperService.decodeToken(this._locahStorageService.get('accessToken'));
  }

}

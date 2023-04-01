import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailResponseContract } from 'src/app/models/models/contracts/users/user-detail-response-contract';
import { JwtPayload } from 'src/app/models/models/dtos/jwt/jwt-payload';
import { JwtService } from 'src/app/services/jwt/jwt.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { CustomNgxSpinnerService } from 'src/app/services/spinner/custom-ngx-spinner-service.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  userDetail:UserDetailResponseContract;
  constructor(private _localStorageService:LocalStorageService,
    private _router:Router,
    private _userService:UserService,
    private _spinnerService:CustomNgxSpinnerService,
    private _jwtService:JwtService){

  }
  async ngOnInit(): Promise<void> {
    // debugger;
    this._spinnerService.show();
    let payload:JwtPayload=this._jwtService.getPaylod();
    this.userDetail=await this._userService.getUserDetail(payload.sub);
    this._spinnerService.hide();
  }

  logout(){
    this._localStorageService.logout();
    this._router.navigate(["/login"]);
  }
}

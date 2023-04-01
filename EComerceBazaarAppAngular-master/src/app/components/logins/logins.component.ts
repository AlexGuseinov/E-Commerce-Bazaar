import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponseContract } from 'src/app/models/models/contracts/auths/login-response-contract';
import { AlertifyMessageTypeEnum } from 'src/app/models/models/enums/notification/alertify/alertify-message-type-enum';
import { AlertifyPositionEnum } from 'src/app/models/models/enums/notification/alertify/alertify-position-enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { AlertifyNotificationService } from 'src/app/services/notification/alertify-notification.service';
import { CustomNgxSpinnerService } from 'src/app/services/spinner/custom-ngx-spinner-service.service';

declare var $:any;
@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.scss']
})
export class LoginsComponent {

  constructor(private _authService:AuthService,private _spinnerService:CustomNgxSpinnerService,
    private _notificationService:AlertifyNotificationService,
    private _logacStorageService:LocalStorageService,
    private _router:Router ){
    
  }

  public async login(username:HTMLInputElement,password:HTMLInputElement):Promise<void>{
    this._spinnerService.show();
    debugger;
    let loginResponse:LoginResponseContract = await this._authService.login({username:$(username).val(),password:$(password).val()})
    this._spinnerService.hide();

    this._notificationService.throwNotification("Salam  🖐","Ugurlu emeliyyat",{
      messageType:AlertifyMessageTypeEnum.Success,
      position:AlertifyPositionEnum.BottomRight
    });

    this._logacStorageService.login(loginResponse.token);
    this._router.navigate(['/']);
  }
}

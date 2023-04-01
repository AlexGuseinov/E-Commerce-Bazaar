import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponseContract } from 'src/app/models/models/contracts/auths/login-response-contract';
import { RegisterContract } from 'src/app/models/models/contracts/auths/register-contract';
import { AlertifyMessageTypeEnum } from 'src/app/models/models/enums/notification/alertify/alertify-message-type-enum';
import { AlertifyPositionEnum } from 'src/app/models/models/enums/notification/alertify/alertify-position-enum';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LocalStorageService } from 'src/app/services/localStorage/local-storage.service';
import { AlertifyNotificationService } from 'src/app/services/notification/alertify-notification.service';
import { CustomNgxSpinnerService } from 'src/app/services/spinner/custom-ngx-spinner-service.service';

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.scss']
})
export class RegistersComponent {
  constructor(private _formBuilder:FormBuilder,
    private _authService:AuthService,
    private _spinnerService:CustomNgxSpinnerService,
    private _notificationService:AlertifyNotificationService,
    private _logacStorageService:LocalStorageService,
    private _router:Router){

  }
  public formGroup:FormGroup=this._formBuilder.group({
    firstName:[""],
    lastName:[""],
    email:[""],
    phoneNumber:[""],
    username:[""],
    password:[""],

  })

  public async onSubmit(registerContract:RegisterContract):Promise<void>{
    this._spinnerService.show();
    let response :LoginResponseContract=await this._authService.register(registerContract);
    
    this._spinnerService.hide();
    this._notificationService.throwNotification("Qeydiyyat tamamlandi","Ugurlu emeliyyat",{
      messageType:AlertifyMessageTypeEnum.Success,
      position:AlertifyPositionEnum.BottomRight
    });

    this._logacStorageService.login(response.token);
    this._router.navigate(['/']);


  }
}

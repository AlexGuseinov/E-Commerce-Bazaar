import { Injectable } from '@angular/core';
import { catchError, Observable, of } from "rxjs";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from "@angular/common/http";
import { Router } from "@angular/router";
import { AlertifyNotificationService } from "../notification/alertify-notification.service";
import { AlertifyMessageTypeEnum } from 'src/app/models/models/enums/notification/alertify/alertify-message-type-enum';
import { AlertifyPositionEnum } from 'src/app/models/models/enums/notification/alertify/alertify-position-enum';
import { AlertifyOption } from 'src/app/models/models/dtos/notification/toastr/alertify-options';
import { CustomNgxSpinnerService } from '../spinner/custom-ngx-spinner-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorHandlerInterceptorService implements HttpInterceptor {

  private alertifyOption: AlertifyOption = {
    messageType: AlertifyMessageTypeEnum.Error,
    delayTimeAsSecond: 8,
    position: AlertifyPositionEnum.BottomRight
  };

  constructor(private router: Router, private alertify: AlertifyNotificationService,
    private _customNgxSpinnerService: CustomNgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    return next.handle(req)
      .pipe(catchError(err => {
        this.checkErrorType(err, next, req);
        return of(err)
      }))
  }

  private checkErrorType(error: HttpErrorResponse, next: HttpHandler, req: HttpRequest<any>): void {

    // debugger;  
    this._customNgxSpinnerService.hideAll();
    switch (error.status) {
      case HttpStatusCode.UnprocessableEntity:
        this.alertify.throwNotification(`Validasiya xətası`, `Mesaj (${error.status.toString()})`, { messageType: AlertifyMessageTypeEnum.Warning, delayTimeAsSecond: 5, position: AlertifyPositionEnum.BottomRight });
        break;
      case HttpStatusCode.InternalServerError:
        this.alertify.throwNotification(`Server Xətası`, `Xəta (${error.status.toString()})`, this.alertifyOption);
        break;
      case HttpStatusCode.Unauthorized:
        this.alertify.throwNotification(`Təsdiqlənməmiş giriş`, `Mesaj (${error.status.toString()})`, {
          messageType: AlertifyMessageTypeEnum.Warning,
          delayTimeAsSecond: 5,
          position: AlertifyPositionEnum.BottomRight
        });
        this.router.navigate(['/login']);
        break;
      case HttpStatusCode.BadRequest:
        this.alertify.throwNotification(`a`, `Mesajı: (${error.status.toString()})`, {
          messageType: AlertifyMessageTypeEnum.Notify,
          delayTimeAsSecond: 8,
          position: AlertifyPositionEnum.BottomRight
        });
        break;
      case HttpStatusCode.FailedDependency:
        this.alertify.throwNotification(`a`, `Mesajı: (${error.status.toString()})`, {
          messageType: AlertifyMessageTypeEnum.Notify,
          delayTimeAsSecond: 8,
          position: AlertifyPositionEnum.BottomRight
        });
        break;
      case HttpStatusCode.Forbidden:
        this.alertify.throwNotification(`İcəzədən kənar əməliyyat`, `Diqqət (${error.status.toString()})`, {
          messageType: AlertifyMessageTypeEnum.Warning,
          delayTimeAsSecond: 5,
          position: AlertifyPositionEnum.BottomRight
        });
        break;
      default:
        this.alertify.throwNotification(`Daha sonra yendən yoxlamağınız xahiş olunur`, `Uğursuz əməliyat (${error.status.toString()})`, this.alertifyOption);
        break;
    }

  }
}

import { Injectable } from '@angular/core';
import { StringExtension } from 'src/app/extensions/string-extensios';
import { AlertifyOption } from 'src/app/models/models/dtos/notification/toastr/alertify-options';
import { AlertifyIconEnum } from 'src/app/models/models/enums/notification/alertify/alertify-icon-enum';

declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyNotificationService {

  defaultDelaySecond = 6;

  constructor() { }

  throwNotification(message: string, title: string, options: Partial<AlertifyOption>) {

    let notificationMessage: string = this.createMessage(
      title,
      message,
      AlertifyIconEnum[StringExtension.toCapitalCase(options.messageType)]);
      
    alertify.set('notifier', 'position', options.position);

    alertify.set(
      'notifier',
      'delay',
      options.delayTimeAsSecond == undefined ? this.defaultDelaySecond : options.delayTimeAsSecond
    );

    alertify[options.messageType](notificationMessage);
  }

  hideAll() {
    alertify.dismissAll();
  }

  private createMessage(title: string, message: string, bootstrapIconClass: string): string {
    return `
      <div style="color:white;font-size:14px;">
        <div style="font-weight:bold;"><i class="bi ${bootstrapIconClass}"></i>  ${title}</div>      
        <span>${message}.</span>
      </div>
    `;
  }
}

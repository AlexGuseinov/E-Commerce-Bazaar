import { AlertifyMessageTypeEnum } from "../../../enums/notification/alertify/alertify-message-type-enum";
import { AlertifyPositionEnum } from "../../../enums/notification/alertify/alertify-position-enum";



export class AlertifyOption{
    messageType?:AlertifyMessageTypeEnum=AlertifyMessageTypeEnum.Message;
    position?:AlertifyPositionEnum=AlertifyPositionEnum.TopRight;
    delayTimeAsSecond?:number;
}
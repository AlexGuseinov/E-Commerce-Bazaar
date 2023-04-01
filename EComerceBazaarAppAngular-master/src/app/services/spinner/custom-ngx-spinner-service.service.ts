import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerOption } from 'src/app/models/models/dtos/spinner/ngxSpinner/ngx-spinner-option';
import { SpinnerAllNameEnum } from 'src/app/models/models/enums/spinner/ngxSpinner/spinner-all-name-enum';
import { SpinnerTypeEnum } from 'src/app/models/models/enums/spinner/ngxSpinner/spinner-type-enum';

@Injectable({
  providedIn: 'root'
})
export class CustomNgxSpinnerService {

  constructor(private ngxSpinnerService: NgxSpinnerService) { }

  show(type?: SpinnerTypeEnum, options?: Partial<NgxSpinnerOption>): void {

    let typeName: string = type == null ? SpinnerTypeEnum.WithoutSentence : type;

    this.ngxSpinnerService.show(typeName);

    if (options?.showTimeAsSecond != undefined)
      setTimeout(() => {
        this.ngxSpinnerService.hide(type);
      }, options.showTimeAsSecond * 1000)

  }

  hide(type?: SpinnerTypeEnum): void {
    if (type != null)
      this.ngxSpinnerService.hide(type);
    else
      this.ngxSpinnerService.hide(SpinnerTypeEnum.WithoutSentence);
  }

  showByName(name: string) {
    this.ngxSpinnerService.show(name);
  }

  hideByName(name: string) {
    this.ngxSpinnerService.hide(name);
  }

  hideAll() {
    for (var enumitem in SpinnerTypeEnum) {
      this.ngxSpinnerService.hide(SpinnerTypeEnum[enumitem]);
    }

    for (var enumitem in SpinnerAllNameEnum) {
      this.ngxSpinnerService.hide(SpinnerAllNameEnum[enumitem]);
    }


  }
}

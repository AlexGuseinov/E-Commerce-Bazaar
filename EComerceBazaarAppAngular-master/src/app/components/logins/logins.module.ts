import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginsComponent } from './logins.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    LoginsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LoginsModule { }

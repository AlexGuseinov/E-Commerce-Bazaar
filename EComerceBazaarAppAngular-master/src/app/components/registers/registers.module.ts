import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistersComponent } from './registers.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegistersModule { 
  
}

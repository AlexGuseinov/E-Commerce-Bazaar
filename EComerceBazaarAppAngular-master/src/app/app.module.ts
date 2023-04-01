import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsModule } from './components/logins/logins.module';
import { ProductsModule } from './components/products/products.module';
import { RegistersModule } from './components/registers/registers.module';
import { HttpErrorHandlerInterceptorService } from './services/interceptor/http-error-handler-interceptor.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesModule } from './components/profiles/profiles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule.forRoot(),
    ProductsModule,
    LoginsModule,
    RegistersModule,
    ProfilesModule,
    //TODO token hansi endpointlere gedecek headerde
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains: [
          "localhost:5000",
        ]
      }
    }),
    HttpClientModule 
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptorService, multi: true},
    {provide: "baseUrl", useValue: "http://localhost:5000"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

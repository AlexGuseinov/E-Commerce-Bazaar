import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from './services/localStorage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-angular-porject';
  constructor(private _router:Router,
    private _localStorageService:LocalStorageService){

  }

  public goProfile(){
    if(this._localStorageService.isAuthenticated())
      this._router.navigate(["/profile"]);
    else
    this._router.navigate(["/login"])

    
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  add(key:string,value:string):void
  {
    localStorage.setItem(key,value);
  }

  get(key:string):string
  {
    return localStorage.getItem(key);
  }

  remove(key:string):void
  {
    localStorage.removeItem(key);
  }

  removeAll():void{
    localStorage.clear();
  }

  login(token:string){
    this.add("accessToken",token);
  }

  getToken():string{
    return this.get("accessToken");
  }

  logout(){
    this.remove("accessToken");

  }

  isAuthenticated(){
    return this.getToken()!=null || this.getToken()!=undefined 
  }

}

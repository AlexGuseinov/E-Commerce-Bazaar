import { HttpHeaders } from "@angular/common/http";

export class HttpClientRequest {
    url: string;
    fullUrl: string;
    controller: string;
    action: string;
    headers: HttpHeaders;
    pathVariable: string;
    queryString: string;
  
    toString():string {
      
      if (this.fullUrl)
        return this.fullUrl;
  
      let finalController=this.controller?`/${this.controller}`:"";
      let finalAction = this.action ? `/${this.action}` : "";
      let finalPathVariable = this.pathVariable ? `/${this.pathVariable}` : "";
      let finalQueryString = this.queryString ? this.queryString : "";
      return `${this.url}${finalController}${finalAction}${finalPathVariable}${finalQueryString}`;
    }
  }
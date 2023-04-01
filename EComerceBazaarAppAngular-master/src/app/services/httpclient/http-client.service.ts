import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpClientRequest } from 'src/app/models/models/dtos/httpclient/HttpClientRequest';
import { ResponseTypeEnum } from 'src/app/models/models/enums/httpclient/response-type-enum';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpclient: HttpClient) {
  }

  get<TResponse>(request: Partial<HttpClientRequest>, responseTypeEnum: ResponseTypeEnum = ResponseTypeEnum.Json): Observable<TResponse> {

    let options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: `${responseTypeEnum}`
    }

    return this.httpclient.get<TResponse>(request.toString());
  }

  post<TResponse>(request: Partial<HttpClientRequest>, body?: any, responseTypeEnum: ResponseTypeEnum = ResponseTypeEnum.Json): Observable<TResponse> {

    let options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: `${responseTypeEnum}`
    }

    return this.httpclient.post<TResponse>(request.toString(), body, options);
  }

  put<TResponse>(request: Partial<HttpClientRequest>, body?: any, responseTypeEnum: ResponseTypeEnum = ResponseTypeEnum.Json): Observable<TResponse> {

    let options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: `${responseTypeEnum}`
    }

    return this.httpclient.put<TResponse>(request.toString(), body);
  }

  delete<TResponse>(request: Partial<HttpClientRequest>, body?: any, responseTypeEnum: ResponseTypeEnum = ResponseTypeEnum.Json): Observable<TResponse> {

    let options: Object = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: body
      ,
      responseType: `${responseTypeEnum}`
    }

    return this.httpclient.delete<TResponse>(request.toString(), options);
  }
}






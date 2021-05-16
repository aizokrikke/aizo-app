import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { ApiHeaders } from '../libs/apiheaders';
import { environment } from '../environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  public list(search = ''): Observable<User[]|string> {
    const headers = new ApiHeaders();
    headers.set(true);
    const params: any = {
      filter: search
    };
    const queryParams: HttpParamsOptions = { fromObject: params };
    return this.http.get<User[]|string>(environment.apiUri + '/' + 'users/',
      { headers: headers.get(), params: new HttpParams(queryParams)} );
  }

  public get(id = ''): Observable<User> {
    const headers = new ApiHeaders();
    headers.set(true);
    return this.http.get<User>(environment.apiUri + '/' + 'users/' + id,
      { headers: headers.get() } );
  }

}

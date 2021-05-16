import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Login, LoginStatus } from '../models/login';
import { User } from '../models/user';
import { ApiMessage } from '../models/apimessage';
import { ApiHeaders } from '../libs/apiheaders';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private storageName = 'user';

  constructor(
    private http: HttpClient
  ) { }

  public login(user: string = '', password: string = ''): Observable<any> {
    const params = {
      login: user,
      password,
      action: 'login'
    };

    const headers = new ApiHeaders();
    headers.set(false);

    const loginProcessed = new Observable((observer) => {
      observer.next('unknown');
      const body = JSON.stringify(params);
      this.http.post<Login>(environment.apiUri + '/' + 'actions/', body , { headers: headers.get() }).subscribe((data: Login) => {
          const token = data.token;
          if (token) {
            sessionStorage.setItem(this.storageName, JSON.stringify(data));
            observer.next('success');
            observer.complete();
          } else {
            observer.next('not found');
          }
        });
    });
    return loginProcessed;
  }

  public logout(): Observable<any> {
    let user: User = {
      firstname: '',
      lastname: '',
      token: ''
    };
    const storedUser = sessionStorage.getItem(this.storageName);
    if (storedUser) {
      user = JSON.parse(storedUser);
    }

    const headers = new ApiHeaders();
    headers.set(false);

    const params = {
      token: user.token,
      action: 'logout'
    };

    const logoutProcessed = new Observable((observer) => {
      const body = JSON.stringify(params);
      this.http.post<ApiMessage>(environment.apiUri + '/' + 'actions/', body, { headers: headers.get() }).subscribe((data) => {
        sessionStorage.setItem('user', '');
        observer.next('success');
        observer.complete();
      });
    });
    return logoutProcessed;
  }

  public getStoredUser(): User {
    let user: User = {
      firstname: '',
      lastname: '',
      token: ''
    };

    const storedUser = sessionStorage.getItem(this.storageName);
    if (storedUser) {
      user = JSON.parse(storedUser);
    }

    return user;
  }

  public status(): Observable<any> {
    const user = this.getStoredUser();

    const params = {
      token: user.token
    };

    const headers = new ApiHeaders();
    headers.set(true);

    const logoutProcessed = new Observable<LoginStatus>((observer) => {
      const body = JSON.stringify(params);
      this.http.post<ApiMessage>(environment.apiUri + '/' + 'sessions/', body, { headers: headers.get() }).subscribe((data) => {
        if (data.statuscode > 0) {
          // session invalid
          sessionStorage.setItem('user', '');
          observer.next({ authenticated: false, roles: []});
        } else {
          // ingelogd
          observer.next({ authenticated: true , roles: ['admin']});
        }
        observer.complete();
      });
    });
    return logoutProcessed;
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { ApiHeaders } from '../libs/apiheaders';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpClient,
  ) { }

  public getMenu(): Observable<any> {

    const headers = new ApiHeaders();
    headers.set(false);

    return this.http.get(environment.apiUri + '/' + 'menuitems/', { headers: headers.get() } );
  }

}

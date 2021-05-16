import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
  ) {
  }

  canActivate(): Observable<boolean>{
    const processed = new Observable<boolean>((observer) => {
      this.loginService.status().subscribe((data) => {
        observer.next(true);
        observer.complete();
      });
    });
    return processed;
  }
}

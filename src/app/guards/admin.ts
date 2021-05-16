import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { map } from 'rxjs/operators';


@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean>{
      return this.loginService.status().pipe(
        map(data => {
          if (data.authenticated) {
            return true;
          }
          this.router.navigate(['/show', 'home']);
          return false;
        })
      );
  }
}

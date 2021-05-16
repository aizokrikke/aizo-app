import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginService } from '../services/login.service';
import { User } from '../models/user';

export class ApiHeaders {
  private headers = new HttpHeaders();
  private storageName = 'user';

  constructor(
  ) {
  }

  private getStoredUser(): User {
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

  public set(includeSession = false): void {
    const session = this.getStoredUser().token;
    this.headers = this.headers.append('Api-Key', environment.apiKey);
    this.headers = this.headers.append('Content-Type', 'application/json');
    if (includeSession && (session)) {
      this.headers = this.headers.append('Session-Key', session);
    }
  }

  public get(): HttpHeaders {
    return this.headers;
  }
}

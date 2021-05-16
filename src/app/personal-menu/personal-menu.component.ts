import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../../models/user';
import { LoginService } from '../../services/login.service';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal-menu',
  templateUrl: './personal-menu.component.html',
  styleUrls: ['./personal-menu.component.scss']
})
export class PersonalMenuComponent implements OnInit {
  faUserCircle = faUserCircle;

  public personalMenu = false;
  public ingelogd = false;
  public user: User = {
    firstname: '',
    lastname: '',
    token: '',
    role: ''
  };

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
      this.setInlogStatus();
  }

  private setInlogStatus(): void {
    this.loginService.status().subscribe((data) => {
      this.ingelogd = (data.authenticated);
      const stored = sessionStorage.getItem('user');
      if (stored) {
        this.user = JSON.parse(stored);
      }
    });
  }

  public showMenu(): void {
    this.personalMenu = true;
  }

  public hideMenu(): void {
    this.personalMenu = false;
  }

  public handleClick(action: string): void {
    switch (action) {
      case 'inloggen': {
        this.router.navigate(['/login']);
        break;
      }
      case 'admin': {
        this.router.navigate(['/admin']);
        break;
      }
      case 'uitloggen': {
        this.loginService.logout().subscribe((data) => {
          if (data === 'success') {
            this.setInlogStatus();
            this.router.navigate(['/show', 'home']);
          }
        });

        break;
      }    }
  }
}

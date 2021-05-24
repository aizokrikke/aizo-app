import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService} from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    remember: ['']
  });

  public errortext = '';
  public user = '';
  private password = '';
  public remember = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const stored = localStorage.getItem('login');
    if (stored) {
      const formdata = JSON.parse(stored);
      this.loginForm.patchValue({login: formdata.login});
      this.remember = (formdata.remember === 'true');
    }
  }

  public login(): void {
    if (this.loginForm.status === 'VALID') {
      this.error('');
    } else {
      this.error('er ontbreekt input');
    }
    this.password = this.loginForm.value.password;
    this.user = this.loginForm.value.login;
    this.loginService.login(this.user, this.password).subscribe((data) => {
      if (data === 'not found') {
        this.error('Gebruiker niet gevonden');
      }
      if (data === 'success') {
        if (this.loginForm.value.remember === true) {
          localStorage.setItem('login', '{ "login": "' + this.user + '", "remember": "' +
            this.loginForm.value.remember + '" }');
        } else {
          localStorage.removeItem('login');
        }

        this.router.navigate(['/show', 'home']);
      }
    });
  }

  private error(message: string): void {
    this.errortext = message;
  }

}

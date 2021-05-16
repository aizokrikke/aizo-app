import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AizoComponent } from './aizo/aizo.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from '../services/menu.service';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { PersonalMenuComponent } from './personal-menu/personal-menu.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppGuard } from './guards/aizo';
import { AdminGuard } from './guards/admin';
import { UseradminComponent } from './useradmin/useradmin.component';
import { MenuadminComponent } from './menuadmin/menuadmin.component';
import { ContentadminComponent } from './contentadmin/contentadmin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminhomeComponent } from './adminhome/adminhome.component';


@NgModule({
  declarations: [
    AppComponent,
    AizoComponent,
    MenuComponent,
    AdminComponent,
    HeaderComponent,
    PersonalMenuComponent,
    LoginComponent,
    UseradminComponent,
    MenuadminComponent,
    ContentadminComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    MenuService,
    AppGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

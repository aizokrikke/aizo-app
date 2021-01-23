import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AizoComponent } from './aizo/aizo.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from '../services/menu.service';


@NgModule({
  declarations: [
    AppComponent,
    AizoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { RecuperaPassComponent } from './login/recupera-pass/recupera-pass.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    LoginComponent,
    LoginAppComponent,
    RecuperaPassComponent,
    Pantalla1Component
  ],
  providers: [
    
  ]
})
export class HomePageModule {}

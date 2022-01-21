import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { RecuperaPassComponent } from './login/recupera-pass/recupera-pass.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { PantallaUsuarioComponent } from './modulos/pantalla-usuario/pantalla-usuario.component';
import { MenuComponent } from '../menu/menu.component';
import { AppScannerComponent } from './pantalla1/app-scanner/app-scanner.component';
import { BaseDatosService } from './servicios/base-datos.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomePage,
    LoginComponent,
    LoginAppComponent,
    RecuperaPassComponent,
    Pantalla1Component,
    Pantalla2Component,
    PantallaUsuarioComponent,
    MenuComponent,
    AppScannerComponent
  ],
  providers: [
    BaseDatosService
  ]
})
export class HomePageModule {}

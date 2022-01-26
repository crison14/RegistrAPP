import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AppCuentaComponent } from './cuenta/app-cuenta/app-cuenta.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { HomePage } from './home.page';
import { LoginAppComponent } from './login/login-app/login-app.component';
import { LoginComponent } from './login/login.component';
import { RecuperaPassComponent } from './login/recupera-pass/recupera-pass.component';
import { AppScannerComponent } from './pantalla1/app-scanner/app-scanner.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { DocenteComponent } from './pantalla2/docente/docente.component';
import { Pantalla2Component } from './pantalla2/pantalla2.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-app',
    component: LoginAppComponent,
  },
  {
    path: 'restablecer-contrasena',
    component: RecuperaPassComponent,
  },
  {
    path: 'pantalla1',
    component: Pantalla1Component,
  },
  {
    path: 'pantalla2',
    component: Pantalla2Component,
  },
  {
    path: 'app-scanner',
    component: AppScannerComponent
  },
  {
    path: 'docente',
    component: DocenteComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path: 'cuenta',
    component: CuentaComponent
  },
  {
    path: 'app-cuenta',
    component: AppCuentaComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

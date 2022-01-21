import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { RecuperaPassComponent } from './login/recupera-pass/recupera-pass.component';
import { PantallaUsuarioComponent } from './modulos/pantalla-usuario/pantalla-usuario.component';
import { AppScannerComponent } from './pantalla1/app-scanner/app-scanner.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
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
    component: LoginComponent,
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
    path: 'pantalla-usuario',
    component: PantallaUsuarioComponent
  },
  {
    path: 'app-scanner',
    component: AppScannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

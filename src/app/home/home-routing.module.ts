import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginComponent } from './login/login.component';
import { RecuperaPassComponent } from './login/recupera-pass/recupera-pass.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

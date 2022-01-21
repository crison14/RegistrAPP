import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modulos/usuario/modelo/Usuario';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  email = new FormControl('');
  contrasena = new FormControl('');

  private usuarios: Array<Usuario> = [];
  
  constructor(
    private baseDatos: BaseDatosService
  ) { }

  ngOnInit() {}
    /* 
  async iniciarSesion(){
    const usuarios = this.baseDatos.obtenerUsuarios()
    .forEach(element => {
      if ( = )
    });
  }*/

}

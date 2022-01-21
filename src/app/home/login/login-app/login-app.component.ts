import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modulos/usuario/modelo/Usuario';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  
  id = new FormControl('');
  nombre = new FormControl('');
  correo = new FormControl('');
  contrasena = new FormControl('');
  apellido = new FormControl('');
  tipo = new FormControl('');
  

  /* 
  usuario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    correo: new FormControl(''),
    tipo: new FormControl(''),
    contrasena: new FormControl(''),
  });*/

  private usuarios: Array<Usuario> = [];
  
  constructor(
    private baseDatos: BaseDatosService
  ) { }

  ngOnInit() {}
    
  /* 
  async iniciarSesion(){
    const usuarios = this.baseDatos.obtenerUsuarios()
    .forEach(usuarios => {
      this.correo == this.baseDatos.obtenerUsuarios(correo)
    });
  }

  async iniciar(){
    this.usuarios = await this.baseDatos.obtenerUsuarios();
  }*/
}

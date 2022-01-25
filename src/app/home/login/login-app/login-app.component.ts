import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modulos/usuario/modelo/Usuario';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { iLogin } from '../../servicios/login.interface';
import { iRespuesta } from '../../servicios/respuesta.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  
  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl ('', Validators.required)
  })
/* 
  id = new FormControl('');
  nombre = new FormControl('');
  correo = new FormControl('');
  contrasena = new FormControl('');
  apellido = new FormControl('');
  tipo = new FormControl('');
  

  
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
    private baseDatos: BaseDatosService,
    private router: Router,
    private cliente: HttpClient
  ) { }

  ngOnInit() {}

  loguear(form:iLogin){
    this.baseDatos.logueando(form).subscribe(data => {
      console.log(data)
    })
  }

  public async capturarDatos(){
    if(this.loginForm.valid === false){
      alert('Complete los campos')
      return;
    }
    console.log(this.loginForm.getRawValue());
  }

    
  /* 
  async iniciarSesion(){
    const usuarios = this.baseDatos.obtenerUsuarios()
    .forEach(usuarios => {
      this.correo == this.baseDatos.obtenerUsuarios(correo)
    });
  }
*/
  
}

import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modulos/usuario/modelo/Usuario';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { iLogin } from '../../servicios/login.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../servicios/task.interface';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  public loginForm!: FormGroup;

  /* 
  loginForm = new FormGroup({
    correo : new FormControl('', Validators.required),
    contrasena : new FormControl ('', Validators.required)
  })

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
    private cliente: HttpClient,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: [''],
      contrasena: ['']
    })
  }

  loguear(form:iLogin){
    this.baseDatos.logueando(form).subscribe(data => {
      console.log(data)
    })
  }

  login(){
    this.cliente.get<any>("http://localhost:3000/usuarios")
    .subscribe(res => {
      const usuario = res.find((a:any) => {
        return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena
      });
      if(usuario.tipo === 'alumno'){
        alert("accediste con exito");
        this.loginForm.reset();
        this.router.navigate(['/home/pantalla1'])
      }else if(usuario.tipo === 'profesor'){
        alert("Profesor. Accediste con exito");
        this.loginForm.reset();
        this.router.navigate(['/home/pantalla2'])
      }else{
        alert("usuario no encontrado")

      }
    })
  }

  public async capturarDatos(){
    if(this.loginForm.valid === false){
      alert('Complete los campos')
      return;
    }
    console.log(this.loginForm.getRawValue());
  }

  traerDatos(){
    console.log(this.baseDatos.traerDatos())
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

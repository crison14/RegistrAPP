import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modulos/usuario/modelo/Usuario';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  public loginForm!: FormGroup;

  private usuarios: Array<Usuario> = [];

  public URL_USUARIOS: string = "https://api.jsonbin.io/b/61f0952bc37c95494354ec2d/1";
  
  constructor(
    private baseDatos: BaseDatosService,
    private router: Router,
    private cliente: HttpClient,
    private fb: FormBuilder,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: [''],
      contrasena: ['']
    })
  }
  
  login(){
    this.cliente.get<any>(this.URL_USUARIOS)
    .subscribe(res => {
      const usuario = res.find((a:any) => {
        return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena
      });
      if(usuario.tipo === 'alumno'){
        alert("Bienvenido "+ usuario.nombre +". Accediste con exito!");
        this.loginForm.reset();
        this.router.navigate(['/home/pantalla1']);
      }else if(usuario.tipo === 'profesor'){
        alert("Bienvenido "+ usuario.nombre +". Accediste con exito!");
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

  
    
  /* 
  async iniciarSesion(){
    const usuarios = this.baseDatos.obtenerUsuarios()
    .forEach(usuarios => {
      this.correo == this.baseDatos.obtenerUsuarios(correo)
    });
  }
*/
  
}

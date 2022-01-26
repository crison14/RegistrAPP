import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../servicios/base-datos.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.scss'],
})
export class LoginAppComponent implements OnInit {

  public loginForm!: FormGroup;

  public URL_USUARIOS: string = "https://api.jsonbin.io/b/61f0952bc37c95494354ec2d/2";
  
  constructor(
    private baseDatos: BaseDatosService,
    private router: Router,
    private cliente: HttpClient,
    private fb: FormBuilder,
    private storage: Storage,
    private mensaje: ToastController
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: [
        '', 
        Validators.required,
      ],
      contrasena: [
        '', 
        Validators.required,
      ]
    })
  }
  
  login(){
    this.cliente.get<any>(this.URL_USUARIOS)
    .subscribe(res => {
      const usuario = res.find((a:any) => {
        return a.correo === this.loginForm.value.correo && a.contrasena === this.loginForm.value.contrasena;

      });
      if(usuario.tipo === 'alumno'){
        this.enviarToast();
        this.loginForm.reset();
        this.router.navigate(['/home/pantalla1']);
      }else if(usuario.tipo === 'profesor'){
        this.enviarToast();
        this.loginForm.reset();
        this.router.navigate(['/home/pantalla2'])
      }else{
        this.enviarToastError();
      }
    },err => {
      alert("ha ocurrido un error.")
    })
  }

  async enviarToast(){
    const toast = await this.mensaje.create({
      message: 'Inicio de sesión correcto' ,
      duration: 2500,
      position: "top"
    });
    await toast.present();
  }

  async enviarToastError(){
    const toast = await this.mensaje.create({
      message: 'El correo o contraseña que acabas de ingresar no existe. Por favor, revise sus datos e intente nuevamente' ,
      duration: 2500,
      position: "top"
    });
    await toast.present();
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

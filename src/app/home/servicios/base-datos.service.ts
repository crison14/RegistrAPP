import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { Usuario } from '../modulos/usuario/modelo/Usuario';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { iLogin } from './login.interface';
import { Task } from './task.interface';



@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private USUARIOS: string = 'http://localhost:3000/usuarios';
  

  constructor(
    private storage: Storage,
    private cliente: HttpClient
  ) { 
    this.iniciar();
  }

  public async iniciar(){
    this.storage = await this.storage.create();
  }

  public obtenerUsuarios(): Observable<Array<Usuario>> {
    return this.cliente.get<Array<Usuario>>(this.USUARIOS);
  }

  traerDatos(){
    const path = 'http://localhost:3000/usuarios';
    return this.cliente.get<Task[]>(path)
  }

  logueando(form:iLogin):Observable<iLogin>{
    let direccion = this.USUARIOS;
    return this.cliente.post<iLogin>(direccion, form);
  }

  entrar(usuario: any):Observable<any> {
    return this.cliente.post(this.USUARIOS, usuario)
  }
}

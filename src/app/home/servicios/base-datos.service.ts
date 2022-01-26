import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { Usuario } from '../modulos/usuario/modelo/Usuario';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private USUARIOS: string = 'https://jsonkeeper.com/b/AMYO';
  

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


  entrar(usuario: any):Observable<any> {
    return this.cliente.post(this.USUARIOS, usuario)
  }
}

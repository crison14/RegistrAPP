import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../modelo/Usuarios';



@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private USUARIOS: string = 'https://api.jsonbin.io/b/61f0952bc37c95494354ec2d/2';
  

  constructor(
    private storage: Storage,
    private cliente: HttpClient
  ) { 
    this.iniciar();
  }

  public async iniciar(){
    this.storage = await this.storage.create();
    
  }

  public obtenerUsuarios(): Observable<Array<Usuarios>> {
    return this.cliente.get<Array<Usuarios>>(this.USUARIOS)
  }

  entrar(correo: any):Observable<any> {
    return this.cliente.post(this.USUARIOS, correo)
  }
}

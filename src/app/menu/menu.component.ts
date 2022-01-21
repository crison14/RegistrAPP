import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public nombre: string = "Cristián";

  constructor(
    private mensaje: ToastController
  ) { }

  ngOnInit() {}

  async cerrarSesion(){
    const toast = await this.mensaje.create({
      message: 'Cerraste Sesión',
      duration: 2500,
      position: "top"
    });
    await toast.present();

  }
}

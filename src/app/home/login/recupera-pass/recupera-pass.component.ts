import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recupera-pass',
  templateUrl: './recupera-pass.component.html',
  styleUrls: ['./recupera-pass.component.scss'],
})
export class RecuperaPassComponent implements OnInit {

  constructor(
    private mensaje: ToastController
  ) { }

  ngOnInit() {}

  async enviarRecuperacion(){
    const toast = await this.mensaje.create({
      message: 'Correo de Recuperación enviado.',
      duration: 2500,
      position: "top"
    });
    await toast.present();
  }
}

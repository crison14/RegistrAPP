import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraResultType } from '@capacitor/camera';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.scss'],
})
export class Pantalla1Component implements OnInit {

  foto: SafeResourceUrl
  codigo: any;

  constructor(
    private sanitizer: DomSanitizer,
    private scannerCodigo: BarcodeScanner,
    private mensaje: ToastController
  ) { }

  ngOnInit() {}

  async tomarFoto(){
    const imagen = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Uri
    })
  }

  escanear(){
    console.log("escanear btn")
  }

  async abrirScanner(){
  this.scannerCodigo.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    this.codigo = barcodeData.text;
  }).catch(err => {
      console.log('Error', err);
  });
  const toast = await this.mensaje.create({
    message: "Se escaneó: " + this.codigo,
    position: 'top',
    duration: 2000
  });
  await toast.present();
  }

}

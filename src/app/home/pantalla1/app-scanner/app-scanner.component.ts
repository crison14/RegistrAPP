import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-scanner',
  templateUrl: './app-scanner.component.html',
  styleUrls: ['./app-scanner.component.scss'],
})
export class AppScannerComponent implements OnInit {

  codigo: any;

  constructor(
    private scannerCodigo: BarcodeScanner,
    private mensaje: ToastController
  ) { }

  async ngOnInit() {
    this.scannerCodigo.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.codigo = barcodeData.text;
    }).catch(err => {
        console.log('Error', err);
    });
    if(this.codigo){
      const toast = await this.mensaje.create({
        message: "Se escaneó: " + this.codigo,
        position: 'top',
        duration: 2000
      });
      await toast.present();
    }else{
      const toast = await this.mensaje.create({
        message: "No se escaneó nada.",
        position: 'top',
        duration: 2000
      });
      await toast.present();
    }
    
    
  }

}

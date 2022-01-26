import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.scss'],
})
export class AcercaComponent implements OnInit {

  constructor(
    private menuController: MenuController
  ) { }

  ngOnInit() {}


  async openMenu() {
    await this.menuController.open();
  }
}

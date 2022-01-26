import { Component, OnInit, Input } from '@angular/core';
import { Usuarios } from '../modelo/Usuarios';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss'],
})
export class CuentaComponent implements OnInit {
  @Input()
  public user: Usuarios;

  constructor() { }

  ngOnInit() {}

}

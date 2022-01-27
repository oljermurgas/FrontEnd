import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/services/inicio/inicio.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(public serviceServices: InicioService) { }

  ngOnInit(): void {
  }

}

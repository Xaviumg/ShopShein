import { Component, OnInit } from '@angular/core';
import {MarcaService} from '../marca.service';
import {Marca} from '../entidades/marca';

@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  marcas!: Marca[];
  marca = new Marca;
  constructor(private servicio: MarcaService) { }

  ngOnInit(): void {
    this.servicio.listarMarcas().subscribe(data => {
      this.marcas = data;
    });
  }
}

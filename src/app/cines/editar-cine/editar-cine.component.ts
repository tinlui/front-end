import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo:cineDTO={nombre:'Sambil',latitud:1,longitud:1};

  ngOnInit(): void {
  }

  guardarCambios(cine:cineCreacionDTO){

  }

}

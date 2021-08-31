import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  constructor() { }

  modelo:cineDTO={nombre:'Sambil',latitud:	23.734100341797,longitud:-99.122299194336};

  ngOnInit(): void {
  }

  guardarCambios(cine:cineCreacionDTO){

  }

}

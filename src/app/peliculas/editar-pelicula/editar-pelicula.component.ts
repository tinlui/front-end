import { Component, OnInit } from '@angular/core';
import { PeliculaDTO, PeliculaoCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO;
    ngOnInit(): void {
  }
  guardarCambios(pelicula : PeliculaoCreacionDTO){
    console.log(pelicula)
  }
}

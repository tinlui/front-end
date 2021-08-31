import { Component, OnInit } from '@angular/core';
import { PeliculaDTO, PeliculaoCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO={titulo:'Spider-Man',trailer:'abc',enCines:true,resumen:'cosa',
fechaLanzamiento:new Date(),poster:'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX67_CR0,0,67,98_AL_.jpg'}
  ngOnInit(): void {
  }
  guardarCambios(pelicula : PeliculaoCreacionDTO){
    console.log(pelicula)
  }
}

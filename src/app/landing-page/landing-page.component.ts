import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private peliculasServices: PeliculasService) {
   
   }

  ngOnInit(): void {
    this.cargarDatos();
  }
  peliculasEnCines:PeliculaDTO[]

  peliculasProximosEstrenos : PeliculaDTO[];
cargarDatos(){
  this.peliculasServices.obtenerLandingPage().subscribe(landingPage=>{
    this.peliculasEnCines=landingPage.enCines;
    this.peliculasProximosEstrenos=landingPage.proximosEstrenos;
  });
}
  borrado(){
this.cargarDatos();
  }
}

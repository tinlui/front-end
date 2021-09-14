import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorPeliculaDTO } from 'src/app/actores/actor';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';

import { PeliculaDTO, PeliculaCreacionDTO } from '../pelicula';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor(private peliculasServices:PeliculasService,
    private activatedRoute:ActivatedRoute,
    private router: Router) { }

  modelo: PeliculaDTO;
  generosNoSeleccionados:MultipleSelectorModel[];
  generosSeleccionados:MultipleSelectorModel[];
  cinesNoSeleccionados:MultipleSelectorModel[];
  cinesSeleccionados:MultipleSelectorModel[];
  actoresSeleccionados:actorPeliculaDTO[];

    ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        this.peliculasServices.putGet(params.id).
        subscribe(peliculaPutGet=>{
          this.modelo=peliculaPutGet.pelicula


          this.cinesSeleccionados = peliculaPutGet.cinesSeleccionados.map((cine) => {
            return <MultipleSelectorModel>{ llave: cine.id, valor: cine.nombre };
          });
          this.cinesNoSeleccionados = peliculaPutGet.cinesNoSeleccionados.map((cine) => {
            
            return <MultipleSelectorModel>{ llave: cine.id, valor: cine.nombre };
          });
          
          this.actoresSeleccionados = peliculaPutGet.actores;

          this.generosSeleccionados = peliculaPutGet.generosSeleccionados.map((genero) => {
            return <MultipleSelectorModel>{
              llave: genero.id,
              valor: genero.nombre
            };
          });

          
          this.generosNoSeleccionados=peliculaPutGet.generosNoSeleccionados.map((genero)=>{
            return <MultipleSelectorModel>{llave:genero.id, valor:genero.nombre};
          });
         

       
        });
      });
  }
  guardarCambios(pelicula : PeliculaCreacionDTO){
   this.peliculasServices.editar(this.modelo.id,pelicula)
   .subscribe(()=>this.router.navigate(['/pelicula/'+this.modelo.id]))
  }
}

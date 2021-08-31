import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaDTO, PeliculaoCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {
  form: FormGroup;

 
  constructor(private formBuilder:FormBuilder) { }

@Output()
OnSubmit: EventEmitter<PeliculaoCreacionDTO>= new EventEmitter<PeliculaoCreacionDTO>();
 

@Input()
modelo:PeliculaDTO;

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      titulo:[
        '',
        {
          validators:[Validators.required]
        }
      ],
      resume:'',
      enCines:false,
      trailer:'',
      fechaLanzamiento:'',
      poster:''
    });
    if(this.modelo !==undefined){
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios(){
this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo:File){
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto){
    this.form.get('resumen').setValue(texto);
  }
}

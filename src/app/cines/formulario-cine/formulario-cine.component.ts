import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Coordenada, CoordenadaConMensaje } from 'src/app/utilidades/mapa/coordenada';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css'],
})
export class FormularioCineComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  modelo: cineCreacionDTO;

  @Input()
  errores:string[]=[];

  @Output()
  guardarCambios: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();

  coordenadaInicial:CoordenadaConMensaje[]=[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      latitud: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      longitud: [
        '',
        {
          validators: [Validators.required],
        },
      ],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud:this.modelo.longitud,mensaje:''})
    }
  }

  OnSubmit() {
    this.guardarCambios.emit(this.form.value);
  }

  coordenadaSeleccionada(coordenada: Coordenada) {
    this.form.patchValue(coordenada);
  }
}

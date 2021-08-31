import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';
import { PeliculaDTO, PeliculaoCreacionDTO } from '../pelicula';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css'],
})
export class FormularioPeliculaComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  @Output()
  OnSubmit: EventEmitter<PeliculaoCreacionDTO> = new EventEmitter<PeliculaoCreacionDTO>();

  @Input()
  modelo: PeliculaDTO;

  generosNoSeleccionados: MultipleSelectorModel[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 2, valor: 'Accion' },
    { llave: 3, valor: 'Comedia' },
  ];

  generosSeleccionados: MultipleSelectorModel[] = [];

  cinesNoSeleccionados:MultipleSelectorModel[]=[
    { llave: 1, valor: 'Ramos' },
    { llave: 2, valor: 'Arteaga' },
    { llave: 3, valor: 'Saltillo' },
  ];
  cinesSeleccionados: MultipleSelectorModel[] = [];
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      resumen: '',
      enCines: false,
      trailer: '',
      fechaLanzamiento: '',
      poster: '',
      generosId: '',
      cinesId:'',
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  guardarCambios() {

    const generosId = this.generosSeleccionados.map((val) => val.llave);
    this.form.get('generosId').setValue(generosId);

    const cinesId = this.cinesSeleccionados.map((val) => val.llave);
    this.form.get('cinesId').setValue(cinesId);

    this.OnSubmit.emit(this.form.value);
  }
  archivoSeleccionado(archivo: File) {
    this.form.get('poster').setValue(archivo);
  }

  changeMarkdown(texto) {
    this.form.get('resumen').setValue(texto);
  }
}

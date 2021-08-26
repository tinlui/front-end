import { AbstractControl, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl) => {
    const valor = <string>control.value;
    if (!valor) return null;
    if (valor.length === 0) return null;

    const primeraLetra = valor[0];
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return{
        primeraLetraMayuscula:{
          mensaje: 'La Primera letra debe ser Mayuscula'
        }
      } ;
    }
    return null;
  }
}

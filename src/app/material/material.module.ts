import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
 
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  exports: [
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatCheckboxModule
  ],

})
export class AngularMaterialModule { }


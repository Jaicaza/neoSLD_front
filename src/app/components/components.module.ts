import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { RegimenComponent } from './regimen/regimen.component';
import { CccComponent } from './ccc/ccc.component';
import { CardComponent } from './card/card.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Card2Component } from './card2/card2.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';




@NgModule({
  declarations: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent,
    Card2Component,
    ListComponent,
    List2Component
  ],
  exports: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent,
    ReactiveFormsModule,
    Card2Component

  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }

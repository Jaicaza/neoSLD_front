import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HeaderComponent } from './header/header.component';
import { RegimenComponent } from './regimen/regimen.component';
import { CccComponent } from './ccc/ccc.component';
import { CardComponent } from './card/card.component';
import { MonthpickerComponent } from './monthpicker/monthpicker.component';



@NgModule({
  declarations: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent
  ],
  exports: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }

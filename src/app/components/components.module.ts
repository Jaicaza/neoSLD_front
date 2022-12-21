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
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { Card3Component } from './card3/card3.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import { CheckBoxOpcionalesComponent } from './check-box-opcionales/check-box-opcionales.component';




@NgModule({
  declarations: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent,
    Card2Component,
    ExpansionPanelComponent,
    Card3Component,
    CheckBoxComponent,
    CheckBoxOpcionalesComponent,
  ],
  exports: [
    HeaderComponent,
    RegimenComponent,
    CccComponent,
    CardComponent,
    MonthpickerComponent,
    ReactiveFormsModule,
    Card2Component,
    ExpansionPanelComponent,
    Card3Component,
    CheckBoxComponent,
    CheckBoxOpcionalesComponent,

  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { Maqueta001Component } from './maqueta001/maqueta001.component';
import { Maqueta002Component } from './maqueta002/maqueta002.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    NoPageFoundComponent,
    Maqueta001Component,
    Maqueta002Component
  ]
  ,
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }

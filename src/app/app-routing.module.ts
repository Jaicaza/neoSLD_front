
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos

import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { Maqueta001Component } from './pages/maqueta001/maqueta001.component';
import { Maqueta002Component } from './pages/maqueta002/maqueta002.component';


const routes: Routes = [
  { path: 'maqueta001', component: Maqueta001Component },
  { path: 'maqueta002', component: Maqueta002Component },
  { path: '', redirectTo: '/maqueta001', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent },
];



@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component'

const routes: Routes = [
  { path: '', redirectTo: 'baitap2', pathMatch: 'full' },
  { path: 'baitap2', component: CarComponent },
  { path: '**', component: CarComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

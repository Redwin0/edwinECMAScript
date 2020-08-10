import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EdadComponent } from './edad/edad.component';


const routes: Routes = [
{
  path:'',
  component:EdadComponent
},
{
  path:'edad',
  component:EdadComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

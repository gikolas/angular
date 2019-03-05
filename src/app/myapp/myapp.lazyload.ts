import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {MyappComponent} from './myapp.component';
const rt : Routes = [
  {
    path:'',
    component : MyappComponent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class myappLazy {

}

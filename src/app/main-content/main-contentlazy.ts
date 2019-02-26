import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {mainContent} from './main-content';

const rt : Routes = [
  {
    path:'',
    component : mainContent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class maincLazy {

}

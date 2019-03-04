import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {BlogComponent} from './blog.component';
const rt : Routes = [
  {
    path:'',
    component : BlogComponent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class blogLazy {

}

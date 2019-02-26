import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {CredicardLoanComponent} from './creditcard-loan.component';
const rt : Routes = [
  {
    path:'',
    component : CredicardLoanComponent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class crcardLazy {

}

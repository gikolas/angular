import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {RefinanceLoanComponent} from './refinance-loan.component';
const rt : Routes = [
  {
    path:'',
    component : RefinanceLoanComponent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class refinancedLazy {

}

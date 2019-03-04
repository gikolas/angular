import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {EngagementLoanComponent} from './engagement-loan.component';
const rt : Routes = [
  {
    path:'',
    component : EngagementLoanComponent
  }
];
@NgModule({

imports : [RouterModule.forChild(rt)],
exports : [RouterModule]
})

export class engagementdLazy {

}

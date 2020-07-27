import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovingLoanComponent } from './moving-loan.component';
const rt: Routes = [
  {
    path: '',
    component: MovingLoanComponent
  }
];
@NgModule({

  imports: [RouterModule.forChild(rt)],
  exports: [RouterModule]
})

export class movingLazy {

}

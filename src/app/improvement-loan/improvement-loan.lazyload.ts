import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprovementLoanComponent } from './improvement-loan.component';
const rt: Routes = [
  {
    path: '',
    component: ImprovementLoanComponent
  }
];
@NgModule({

  imports: [RouterModule.forChild(rt)],
  exports: [RouterModule]
})

export class improvmentLazy {

}

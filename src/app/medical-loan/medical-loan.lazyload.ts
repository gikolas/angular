import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalLoanComponent } from './medical-loan.component';
const rt: Routes = [
  {
    path: '',
    component: MedicalLoanComponent
  }
];
@NgModule({

  imports: [RouterModule.forChild(rt)],
  exports: [RouterModule]
})

export class medicalLazy {

}

import { NgModule } from '@angular/core';
import { MedicalLoanComponent } from './medical-loan.component';
import { medicalLazy } from './medical-loan.lazyload';
import { CommonModule } from '@angular/common';
import { containerLoanModule } from '../containerloans/containerloansmodule';
import { containerloans } from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    medicalLazy,
    containerLoanModule
  ],
  declarations: [MedicalLoanComponent]
})
export class medicalModule {

}
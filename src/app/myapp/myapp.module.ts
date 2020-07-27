import { NgModule } from '@angular/core';
import { MyappComponent } from './myapp.component';
import { myappLazy } from './myapp.lazyload';
import { CommonModule } from '@angular/common';
import { containerLoanModule } from '../containerloans/containerloansmodule';
import { containerloans } from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    myappLazy,
    containerLoanModule
  ],
  declarations: [MyappComponent]
})
export class myappModule {

}
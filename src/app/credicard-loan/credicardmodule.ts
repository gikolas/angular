import {NgModule} from '@angular/core';
import {CredicardLoanComponent} from './credicard-loan.component';
import {crcardLazy} from './creditcardlazyload';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    CommonModule,
    crcardLazy
  ],
declarations : [CredicardLoanComponent]
})
export class credCardModule {

}
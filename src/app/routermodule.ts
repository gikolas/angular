import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'comp1',
    loadChildren: './credicard-loan/credicardmodule#credCardModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterSharedModule { }

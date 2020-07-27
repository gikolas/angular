import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewComponent } from './review.component';
const rt: Routes = [
  {
    path: '',
    component: ReviewComponent
  }
];
@NgModule({

  imports: [RouterModule.forChild(rt)],
  exports: [RouterModule]
})

export class reviewLazy {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {mainContent} from './main-content/main-content';
const routes: Routes = [
  {
    path:'',
    component : mainContent
    //loadChildren :'./main-content/main-contentroutermodule#maincrmodule'
  },
  {
    path: 'credit-card',
    loadChildren: './creditcard-loan/creditcard-loan.module#credCardModule',

  },

  {
    path: 'engagement',
    loadChildren: './engagement-loan/engagement-loan.module#engagementModule',

  },
  {
    path: 'improvement',
    loadChildren: './improvement-loan/improvement-loan.module#improvementModule',

  },

  {
    path: '**',
    component : mainContent
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import {mainContent} from './main-content/main-content';
import {CheckRateComponent} from './check-rate/check-rate.component';
import {ApplicationsComponent} from './applications/applications.component';
import {MyAppGuard} from './my-app.guard';
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
    path: 'moving',
    loadChildren: './moving-loan/moving-loan.module#movingModule',

  },
  {
    path: 'medical',
    loadChildren: './medical-loan/medical-loan.module#medicalModule',

  },

  {
    path: 'refinance',
    loadChildren: './refinance-loan/refinance-loan.module#refinanceModule',

  },
  {
    path: 'review',
    loadChildren: './review/review.module#reviewModule',

  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#blogModule',

  },
  
  {
    path:'check/:name',
    component : CheckRateComponent
 
  },

  {
    path:'applications/:name',
    component : ApplicationsComponent
 
  },

  {
path:'myApp',
loadChildren:'./myapp/myapp.module#myappModule',
canActivate:[MyAppGuard]
  },
  {
    path: '**',
    component : mainContent
  },


  

  

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouterSharedModule { }

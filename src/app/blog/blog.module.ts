import {NgModule} from '@angular/core';
import {BlogComponent} from './blog.component';
import {blogLazy} from './blog.lazyload';
import { CommonModule } from '@angular/common';
import {containerLoanModule} from '../containerloans/containerloansmodule';
import {containerloans} from '../containerloans/containerloans';
@NgModule({
  imports: [
    CommonModule,
    blogLazy,
    containerLoanModule
  ],
declarations : [BlogComponent]
})
export class blogModule {

}
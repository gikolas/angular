import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {headerModule} from './header/headermodule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {containerLoanModule} from './containerloans/containerloansmodule';
import {FormsModule} from '@angular/forms';
import {contentModule} from './content/contentmodule';
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {footerModule} from './footer/footermodule';
import {modalModule} from './modal/modalmodule';
import { CredicardLoanComponent } from './creditcard-loan/creditcard-loan.component';
import { EngagementLoanComponent } from './engagement-loan/engagement-loan.component';
import { ImprovementLoanComponent } from './improvement-loan/improvement-loan.component';
import { MedicalLoanComponent } from './medical-loan/medical-loan.component';
import { MovingLoanComponent } from './moving-loan/moving-loan.component';
import {RouterSharedModule} from './routermodule';
import {mainContent} from './main-content/main-content';
import { RefinanceLoanComponent } from './refinance-loan/refinance-loan.component';
import { ReviewComponent } from './review/review.component';
import { BlogComponent } from './blog/blog.component';
import {services} from './services';
import { CheckRateComponent } from './check-rate/check-rate.component';
import { ApplicationsComponent } from './applications/applications.component';
import {firebaseModule} from './firebase/firebase.module';
import {reducer} from './ngrx-store/reducer';
import {StoreModule} from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import {pipeRates} from './check-rate/ratePipe';
@NgModule({
  declarations: [
    AppComponent,
    //CredicardLoanComponent,
   // EngagementLoanComponent,
    //ImprovementLoanComponent,
    //MedicalLoanComponent,
   // MovingLoanComponent,
    mainContent,
    CheckRateComponent,
    ApplicationsComponent,
    pipeRates
    //BlogComponent,
   // ReviewComponent,
   // RefinanceLoanComponent
  ],
  imports: [
    BrowserModule,
    headerModule,
    BrowserAnimationsModule,
    containerLoanModule,
    FormsModule,
    contentModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    footerModule,
    modalModule,
    RouterSharedModule,
    firebaseModule,
    StoreModule.forRoot({
      someAction : reducer
    }),
    ReactiveFormsModule,

   
  ],
  providers: [services,pipeRates],
  bootstrap: [AppComponent]
})
export class AppModule { }

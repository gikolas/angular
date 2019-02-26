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

@NgModule({
  declarations: [
    AppComponent,
    //CredicardLoanComponent,
    EngagementLoanComponent,
    ImprovementLoanComponent,
    MedicalLoanComponent,
    MovingLoanComponent,
    mainContent
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
    RouterSharedModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

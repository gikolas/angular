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
@NgModule({
  declarations: [
    AppComponent
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
    modalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

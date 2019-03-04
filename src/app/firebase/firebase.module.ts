import {NgModule} from '@angular/core';
import {firebaseService} from './firebase.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
providers : [firebaseService],
imports : [HttpClientModule]
})

export class firebaseModule {

}
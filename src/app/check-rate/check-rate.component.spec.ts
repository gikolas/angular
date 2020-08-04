import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {pipeRates} from './ratePipe';
import { CheckRateComponent } from './check-rate.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
import {MyAppGuard} from '../my-app.guard'
import {firebaseService} from '../firebase/firebase.service';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../ngrx-store/reducer';

describe('CheckRateComponent', () => {
  const fakeActivatedRoute = {
    params: {subscribe: () => {}}
  } as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckRateComponent, pipeRates],
      imports: [BrowserAnimationsModule, ReactiveFormsModule, 
        StoreModule.forRoot({
          someAction: reducer
        }),],
      providers: [HttpClientModule, HttpClient, HttpHandler, firebaseService, Store, 
        {provide: ActivatedRoute, useValue: fakeActivatedRoute} 
      ]
    })
  });
  it('should create CheckRateComponent', () => {
    const fixture = TestBed.createComponent(CheckRateComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy;
  });

  it('create instance', () => {
    const pipeRate = new pipeRates();
    expect(pipeRate).toBeTruthy();
  });


  /*it('should be subscribe', () => {
    const fixture = TestBed.createComponent(CheckRateComponent);
    const app = fixture.componentInstance;
    const serv = fixture.debugElement.injector.get(firebaseService);
   
    spyOn(serv, 'getRate')
    .and.returnValue({ subscribe: () => {} })
    fixture.detectChanges();
    // do stuff
    expect(serv.getRate).toHaveBeenCalled();
  })*/
  /*it('should have a pipe', () => {
    const fixture = TestBed.createComponent(CheckRateComponent);
    const app = fixture.componentInstance;
    const am = 'Your Rate Is';
    fixture.detectChanges();
    expect(app.loanAmount).toEqual('Your Rate Is')
    
  })*/
})
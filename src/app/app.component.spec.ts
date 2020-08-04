import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {headerModule} from './header/headermodule';
import { CommonModule } from '@angular/common';
import {RouterModule, Router} from '@angular/router';
import { modalModule } from './modal/modalmodule';
import {firebaseService} from './firebase/firebase.service';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';
import {services} from './services';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [CommonModule, RouterModule, modalModule, headerModule, RouterTestingModule],
      
      providers: [ HttpClientModule, HttpClient,HttpHandler, firebaseService, services]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})

import { TestBed, async, inject } from '@angular/core/testing';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';

import {firebaseService} from './firebase/firebase.service';


import { MyAppGuard } from './my-app.guard';

describe('MyAppGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAppGuard, HttpClientModule, HttpClient, HttpHandler, firebaseService]
    });
  });

  it('should ...', inject([MyAppGuard], (guard: MyAppGuard) => {
    expect(guard).toBeTruthy();
  }));
});


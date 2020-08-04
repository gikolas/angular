import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {firebaseService} from '../firebase/firebase.service';
import { MyappComponent } from './myapp.component';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';
describe('MyappComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappComponent ],
      providers: [HttpClientModule, firebaseService, HttpClient, HttpHandler]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyappComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

})

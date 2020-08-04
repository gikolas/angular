import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredicardLoanComponent } from './creditcard-loan.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('CredicardLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CredicardLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CredicardLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})

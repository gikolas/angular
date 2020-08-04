import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingLoanComponent } from './moving-loan.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MovingLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MovingLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})

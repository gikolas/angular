import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceLoanComponent } from './refinance-loan.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('RefinanceLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanceLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RefinanceLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementLoanComponent } from './engagement-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('EngagementLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EngagementLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})

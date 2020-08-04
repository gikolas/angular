import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementLoanComponent } from './improvement-loan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ImprovementLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovementLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ImprovementLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})
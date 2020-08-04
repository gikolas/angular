import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLoanComponent } from './medical-loan.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('MedicalLoanComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalLoanComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MedicalLoanComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})
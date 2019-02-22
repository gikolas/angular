import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalLoanComponent } from './medical-loan.component';

describe('MedicalLoanComponent', () => {
  let component: MedicalLoanComponent;
  let fixture: ComponentFixture<MedicalLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

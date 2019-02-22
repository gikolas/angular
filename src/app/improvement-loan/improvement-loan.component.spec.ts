import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovementLoanComponent } from './improvement-loan.component';

describe('ImprovementLoanComponent', () => {
  let component: ImprovementLoanComponent;
  let fixture: ComponentFixture<ImprovementLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprovementLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprovementLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

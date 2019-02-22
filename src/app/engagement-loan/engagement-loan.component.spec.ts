import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementLoanComponent } from './engagement-loan.component';

describe('EngagementLoanComponent', () => {
  let component: EngagementLoanComponent;
  let fixture: ComponentFixture<EngagementLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngagementLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngagementLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

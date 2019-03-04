import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefinanceLoanComponent } from './refinance-loan.component';

describe('RefinanceLoanComponent', () => {
  let component: RefinanceLoanComponent;
  let fixture: ComponentFixture<RefinanceLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefinanceLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefinanceLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

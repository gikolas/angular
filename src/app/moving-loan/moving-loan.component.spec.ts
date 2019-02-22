import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingLoanComponent } from './moving-loan.component';

describe('MovingLoanComponent', () => {
  let component: MovingLoanComponent;
  let fixture: ComponentFixture<MovingLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

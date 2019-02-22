import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredicardLoanComponent } from './credicard-loan.component';

describe('CredicardLoanComponent', () => {
  let component: CredicardLoanComponent;
  let fixture: ComponentFixture<CredicardLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredicardLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredicardLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

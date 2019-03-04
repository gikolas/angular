import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckRateComponent } from './check-rate.component';

describe('CheckRateComponent', () => {
  let component: CheckRateComponent;
  let fixture: ComponentFixture<CheckRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
describe('ReviewComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewComponent ],
      imports: [BrowserAnimationsModule]
    })
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
})


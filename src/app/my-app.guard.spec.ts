import { TestBed, async, inject } from '@angular/core/testing';

import { MyAppGuard } from './my-app.guard';

describe('MyAppGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAppGuard]
    });
  });

  it('should ...', inject([MyAppGuard], (guard: MyAppGuard) => {
    expect(guard).toBeTruthy();
  }));
});

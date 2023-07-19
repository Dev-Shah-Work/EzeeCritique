import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { brandAuthGuardGuard } from './brand-auth-guard.guard';

describe('brandAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => brandAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

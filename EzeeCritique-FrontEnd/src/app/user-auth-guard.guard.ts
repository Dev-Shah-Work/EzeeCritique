import { CanActivateFn } from '@angular/router';

export const userAuthGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

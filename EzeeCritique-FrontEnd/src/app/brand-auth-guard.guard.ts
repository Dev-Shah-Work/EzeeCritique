import { CanActivateFn } from '@angular/router';

export const brandAuthGuardGuard: CanActivateFn = (route, state) => {
  return true;
};

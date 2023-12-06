import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if (!(auth.profil.status == "superAdmin")) {
    return;
  };
  return auth.isLoggedIn();
};

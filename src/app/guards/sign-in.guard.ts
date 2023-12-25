import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class SignInPermission {
  constructor() {}

  canActivate() {
    // const isLogged = !!this.cookieService.get("AccessToken");

    // if (isLogged) {
    //   return true;
    // }

    return true;
  }
}

export const SignInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SignInPermission).canActivate();
};

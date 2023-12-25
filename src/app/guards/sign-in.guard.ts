import { Injectable, inject } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable()
export class SignInPermission {
  constructor(private router: Router) {}

  canActivate() {
    const isLogged = !!localStorage.getItem("AccessToken");

    console.log(isLogged);

    if (isLogged) {
      return true;
    }

    this.router.navigate(["/auth"]);

    return false;
  }
}

export const SignInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return inject(SignInPermission).canActivate();
};

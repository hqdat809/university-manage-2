import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { NgModule } from "@angular/core";

export const AuthRoutes: Routes = [
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forgot", component: ForgotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [],
})
export class AuthRouting {}

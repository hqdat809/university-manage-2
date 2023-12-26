import { NgModule } from "@angular/core";

import { AuthComponent } from "./auth.component";
import { AuthRouting } from "./auth.routing";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgotComponent } from "./forgot/forgot.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    AuthRouting,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  exports: [],
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ForgotComponent,
  ],
  providers: [],
})
export class AuthModule {}

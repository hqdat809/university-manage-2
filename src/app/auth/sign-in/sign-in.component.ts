import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  userInfo$ = this.authService.testData$;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: false,
    });

    this.userInfo$.subscribe((data) => console.log("data after login: ", data));
  }

  onSubmit(loginInfo: any) {
    console.log("signInForm: ", this.signInForm);
    const { rememberMe, ...rest } = loginInfo;
    this.authService.login(rest);
  }
}

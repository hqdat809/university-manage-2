import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";
import { ENotificationType, showNotification } from "utils/notification";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  userInfo$ = this.authService.testData$;
  loadingSignIn = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const isLogged = localStorage.getItem("AccessToken");

    if (isLogged) {
      this.router.navigate(["/admin"]);
    }

    this.signInForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: false,
    });

    this.authService.loadingSignIn$.subscribe((data) => {
      this.loadingSignIn = data;
    });
  }

  onSubmit(loginInfo: any) {
    const { rememberMe, ...rest } = loginInfo;
    this.authService.login(rest);
  }
}

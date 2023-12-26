import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: "app-forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"],
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
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

    this.forgotForm = this.fb.group({
      studentId: ["", Validators.required],
      email: ["", Validators.required],
    });

    this.authService.loadingSignIn$.subscribe((data) => {
      this.loadingSignIn = data;
    });
  }

  onSubmit(loginInfo: any) {
    // const { rememberMe, ...rest } = loginInfo;
    // this.authService.login(rest);
  }
}

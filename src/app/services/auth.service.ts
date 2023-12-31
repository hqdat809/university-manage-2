import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IError, ILogin, ISignInResponse } from "app/models/auth.model";
import { BehaviorSubject, finalize } from "rxjs";
import { ENotificationType, showNotification } from "utils/notification";

@Injectable({ providedIn: "root" })
export class AuthService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private testDataSubject = new BehaviorSubject<any>(null);
  private loginSubject = new BehaviorSubject<any>(null);

  public userInfo$ = this.loginSubject.asObservable();
  public testData$ = this.testDataSubject.asObservable();
  public loadingSignIn$ = this.loadingSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  fetchData(): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/json", // Adjust the content type based on your API requirements
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYXRocSIsImlhdCI6MTcwMzQ2NjQwNCwiZXhwIjoxNzAzNTUyODA0fQ.-BqXCuKX3cBaqgx9ft32MWtfDtzl8B5kpANlPiA8QF4",
    });

    this.http
      .get("https://university-management.azurewebsites.net/v1/api/accounts", {
        headers: headers,
      })
      .subscribe((data) => {
        this.testDataSubject.next(data);
      });
  }

  login(account: ILogin): void {
    const { rememberMe, ...rest } = account;
    this.loadingSubject.next(true);

    this.http
      .post("auth/login", rest)
      .pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(
        (data: ISignInResponse) => {
          this.loginSubject.next(data);
          // this.cookieService.set("AccessToken", data.token);
          // this.cookieService.set("RefreshToken", data.refreshToken);
          localStorage.setItem("AccessToken", data.accessToken);
          localStorage.setItem("RefreshToken", data.refreshToken);
          localStorage.setItem("RememberMe", `${rememberMe}`);

          // navigate()
          this.router.navigate(["/admin"]);
        },
        (error: IError) => {
          if (error.status === 401) {
            showNotification(
              "top",
              "right",
              "Username or password is wrong!!",
              ENotificationType.danger
            );
          } else {
            showNotification(
              "top",
              "right",
              error.statusText,
              ENotificationType.danger
            );
          }
        }
      );
  }
}

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ILogin, ISignInResponse } from "app/models/auth.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AuthService {
  private testDataSubject = new BehaviorSubject<any>(null);
  private loginSubject = new BehaviorSubject<any>(null);

  public userInfo$ = this.loginSubject.asObservable();
  public testData$ = this.testDataSubject.asObservable();

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
    this.http.post("auth/login", account).subscribe(
      (data: ISignInResponse) => {
        this.loginSubject.next(data);
        // this.cookieService.set("AccessToken", data.token);
        // this.cookieService.set("RefreshToken", data.refreshToken);

        // navigate()
        this.router.navigate(["/"]);
      },
      (error) => {
        console.log("error: ", error);
      }
    );
  }
}

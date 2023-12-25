import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: "root" })
export class ApiInterceptor implements HttpInterceptor {
  accessToken = "";
  private apiUrl = "https://university-management.azurewebsites.net/v1/api";

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      url: `${this.apiUrl}/${req.url}`,
      setHeaders: {
        Authorization:
          req.headers.get("Authorization") || "Bearer " + this.accessToken,
        "Content-Type": "application/json",
      },
    });

    return next.handle(modifiedRequest);
  }
}

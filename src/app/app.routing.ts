import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { SignInGuard } from "./guards/sign-in.guard";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  // {
  //   path: "",
  //   redirectTo: "",
  //   pathMatch: "full",
  // },

  {
    path: "",
    children: [
      {
        path: "",
        component: MainPageComponent,
        loadChildren: () =>
          import("./main-page/main-page.module").then((m) => m.MainPageModule),
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./auth/auth.module").then((m) => m.AuthModule),
      },
    ],
  },

  {
    path: "admin",
    component: AdminLayoutComponent,
    canActivate: [SignInGuard],
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then(
            (m) => m.AdminLayoutModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}

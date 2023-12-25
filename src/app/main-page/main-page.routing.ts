import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { MainPageChildComponent } from "./main-page-child/main-page-child.component";
import { HomeComponent } from "./home/home.component";

export const MainPageRoutes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forChild(MainPageRoutes)],
  exports: [],
})
export class MainPageRouting {}

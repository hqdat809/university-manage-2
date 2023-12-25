import { NgModule } from "@angular/core";

import { MainPageComponent } from "./main-page.component";
import { MainPageRouting } from "./main-page.routing";
import { RouterModule } from "@angular/router";
import { MainPageChildComponent } from "./main-page-child/main-page-child.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [MainPageRouting, RouterModule, MatIconModule],
  exports: [],
  declarations: [MainPageComponent, MainPageChildComponent, NavbarComponent, HomeComponent, FooterComponent],
  providers: [],
})
export class MainPageModule {}

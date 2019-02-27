import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule { }

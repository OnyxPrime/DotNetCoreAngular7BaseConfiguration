import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FetchDataComponent } from "./fetch-data.component";
import { AuthGuardService } from "../core/services/auth-guard.service";
import { CommonModule } from "@angular/common";


const fetchDataRoutes: Routes = [
  { path: '', component: FetchDataComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(fetchDataRoutes),
  ],
  exports: [FetchDataComponent],
  declarations: [FetchDataComponent],
  providers: []
})
export class FetchDataModule {

}

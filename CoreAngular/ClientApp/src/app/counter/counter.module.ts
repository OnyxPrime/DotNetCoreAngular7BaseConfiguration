import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CounterComponent } from "./counter.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: CounterComponent }
    ])],
  exports: [],
  declarations: [CounterComponent],
  providers: []
})
export class CounterModule {

}

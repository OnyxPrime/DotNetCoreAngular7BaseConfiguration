import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule', pathMatch: 'full'},
  { path: 'counter', loadChildren: './counter/counter.module#CounterModule' },
  { path: 'fetch-data', loadChildren: './fetch-data/fetch-data.module#FetchDataModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

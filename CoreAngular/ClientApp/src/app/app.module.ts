import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdalInterceptor, AdalGuard, AdalService } from 'adal-angular4';
import { HomeModule } from './home/home.module';
import { CounterModule } from './counter/counter.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FetchDataModule } from './fetch-data/fetch-data.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SharedModule,
    CoreModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AdalService,
    AdalGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AdalInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

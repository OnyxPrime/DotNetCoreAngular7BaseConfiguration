import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavMenuComponent } from './components/nav/nav-menu.component';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AuthGuardService } from './services/auth-guard.service';
import { AdalService } from 'adal-angular4';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule
  ],
  exports: [NavMenuComponent, RouterModule],
  declarations: [NavMenuComponent],
  providers: [AdalService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [AuthGuardService]
    }
  }
}

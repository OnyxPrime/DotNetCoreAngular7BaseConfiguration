import { Component } from '@angular/core';
import { AdalService } from 'adal-angular4';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private adal: AdalService) {
    this.adal.init(environment.config);
  }
}

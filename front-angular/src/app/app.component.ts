import { Component } from '@angular/core';
import {environment  }from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-angular';
  public environment = environment.environment;
  public SomeAPIKey = environment.APIKeys.SomeAPIKey;
  public SomeOtherAPIKey = environment.APIKeys.SomeOtherAPIKey;
  public test = environment.test
}

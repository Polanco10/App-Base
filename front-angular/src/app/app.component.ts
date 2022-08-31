import { Component } from '@angular/core';
import {environment  }from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-angular';
  label:string = environment.THE_LABEL
}

import { Component } from '@angular/core';
import {person} from "./model.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  name1 = [];

  add(){

    this.name1.push();
  }
}

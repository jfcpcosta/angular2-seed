import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app",
  template: `
    <h1>Hello, Angular 2</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

    ngOnInit() {
      console.log("Application component initialized...");
    }
}

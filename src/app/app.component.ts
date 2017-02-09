import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app",
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

    ngOnInit() {
      console.log("Application component initialized...");
    }
}

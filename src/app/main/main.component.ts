import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'Webfejl04';
  firstOutput: any;

  constructor(private router: Router, private args: ActivatedRoute) {
    this.args.params.subscribe(params => {
      console.log(params);
      this.title = params["name"];
    })
  }

  handleOutput(event) {
    console.log("megkaptam az outputot", event);
    this.firstOutput = event;
  }
}

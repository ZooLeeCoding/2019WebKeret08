import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-second',
  templateUrl: './my-second.component.html',
  styleUrls: ['./my-second.component.css']
})
export class MySecondComponent implements OnInit, OnChanges {

  @Input() newLog: any;

  logs: any[];

  constructor() { }

  ngOnInit() {
    this.logs = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log("raktarozas detektalva", changes);
    if(this.newLog) {
      let nLog = this.newLog;
      nLog.date = new Date().toISOString();
      this.logs.push(nLog);
    }
  }

  

}

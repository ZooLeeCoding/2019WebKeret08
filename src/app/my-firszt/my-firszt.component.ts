import { Component, OnInit, OnChanges, 
  SimpleChanges, EventEmitter,
  Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-firszt',
  templateUrl: './my-firszt.component.html',
  styleUrls: ['./my-firszt.component.css']
})
export class MyFirsztComponent implements OnInit, OnChanges {

  @Input() name: String;
  @Input() num: Number;
  @Output() myEmitter = new EventEmitter();

  valtozo1: boolean;
  valtozo2: String;
  valtozo3: Number;
  valtozoLista: any[];

  constructor() {
    this.valtozoLista = [{neve: "alma", ara: 100}, 
    {neve: "narancs", ara: 50}, 
    {neve: "banan", ara: 80}];
    this.valtozo1 = true;
    this.valtozo2 = "RAKTAROZZ"
    this.valtozo3 = 0;
   }

   ngOnChanges(changes: SimpleChanges) {
    console.log("onchanges");
    this.valtozo2 = this.name;
    this.valtozo3 = this.num;
  }

   raktarFeltoltes() {
     if(this.valtozo2 !== "RAKTAROZZ") {
      this.valtozoLista.push({neve: this.valtozo2, 
        ara: this.valtozo3});
      this.myEmitter.emit({neve: this.valtozo2, 
        ara: this.valtozo3});
     }
   }

  venniAkarok(gyumolcs: any) {
    console.log("Vettem egy " + gyumolcs.neve + "-t " + 
    gyumolcs.ara + " forintert");
  }

  ngOnInit() {
    console.log("oninit");
  }

  ngDoCheck() {
    console.log("docheck");
  }

}

import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit, OnChanges {
  @Input() sendToChild: string = '';
  constructor() {}

  ngOnChanges() {
    if (this.sendToChild != undefined) {
      console.log(`${this.sendToChild} received from child1 in child2 `);
    }
  }
  ngOnInit() {}
}

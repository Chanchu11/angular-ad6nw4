import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component implements OnInit {
  name: string = '';
  @Output() sendToParent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  sendParent() {
    this.sendToParent.emit(this.name);
    console.log(`${this.name} sent by child1`);
  }
}

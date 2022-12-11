import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  inputText: string;
  dataReceivedFromChild1: string;
  constructor() {}

  ngOnInit() {}
  getData(data: string) {
    this.dataReceivedFromChild1 = data;
    if (this.dataReceivedFromChild1 != undefined)
      console.log(
        `${this.dataReceivedFromChild1} received from child1 in parent`
      );
  }
}

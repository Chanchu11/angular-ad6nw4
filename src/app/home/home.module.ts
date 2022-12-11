import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [Child1Component, Child2Component],
  bootstrap: [],
})
export class AppModule {}

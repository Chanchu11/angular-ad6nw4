import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { NopageComponent } from './nopage/nopage.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { Child1Component } from './home/child1/child1.component';
import { Child2Component } from './home/child2/child2.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    UserComponent,
    HomeComponent,
    NopageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    Child1Component,
    Child2Component
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

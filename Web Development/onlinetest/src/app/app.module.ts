import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SoftwarequestionComponent } from './questions/softwarequestion/softwarequestion.component';
import { HardwarequestionComponent } from './questions/hardwarequestion/hardwarequestion.component';
import { NetworkComponent } from './questions/hardwarequestion/network/network.component';
import { TestcompletedComponent } from './testcompleted/testcompleted.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    HomeComponent,
    SoftwarequestionComponent,
    HardwarequestionComponent,
    NetworkComponent,
    TestcompletedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

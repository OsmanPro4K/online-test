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


@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    HomeComponent,
    SoftwarequestionComponent,
    HardwarequestionComponent
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

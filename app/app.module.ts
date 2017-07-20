import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { PieChartComponent }  from './pie-chart.component';
import { DataService }  from './data.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ 
    AppComponent,
    PieChartComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    DataService
  ]
})

export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
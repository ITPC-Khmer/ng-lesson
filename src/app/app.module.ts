import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { App2Module } from './app2/app2.module';
import { App3Module } from './app3/app3.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VisionComponent } from './about/vision/vision.component';
import { TviewComponent } from './tview/tview.component';

import { StockModule } from './stock/stock.module';
import { AccountModule } from './account/account.module';
import { HrmModule } from './hrm/hrm.module';
import { D1Directive } from './d1.directive';
import { D2Directive } from './d2.directive';
import { TestDirective1Component } from './test-directive1/test-directive1.component';
import { LeftComponent } from './left/left.component';
import { CenterComponent } from './center/center.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VisionComponent,
    TviewComponent,
    D1Directive,
    D2Directive,
    TestDirective1Component,
    LeftComponent,
    CenterComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    App2Module,
    App3Module,
    StockModule,
    AccountModule,
    HrmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

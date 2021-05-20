import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { MaterialModule } from './material/material.module';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FifthPageComponent } from './fifth-page/fifth-page.component';
import { CommonPagesComponent } from './common-pages/common-pages.component';
import { SeventhPageComponent } from './seventh-page/seventh-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    FifthPageComponent,
    CommonPagesComponent,
    SeventhPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

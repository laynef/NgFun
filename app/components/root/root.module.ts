import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RootComponent } from './root.component';
import { NavbarComponent } from '../navbar/navbar.component';

import 'hammerjs';

@NgModule({
  declarations: [
    RootComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule { }
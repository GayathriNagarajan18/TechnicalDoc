import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockitoComponent } from './mockito/mockito.component';
import { PrimengModule } from './primeng.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    AppComponent,
    MockitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

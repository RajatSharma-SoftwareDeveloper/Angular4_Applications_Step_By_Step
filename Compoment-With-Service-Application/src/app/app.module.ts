import { DerivedDataService } from './derived-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DerivedComponent } from './derived/derived.component';

@NgModule({
  declarations: [
    AppComponent,
    DerivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DerivedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

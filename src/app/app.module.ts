import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibSharedModule } from 'shared-components/src/app/lib/lib-shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

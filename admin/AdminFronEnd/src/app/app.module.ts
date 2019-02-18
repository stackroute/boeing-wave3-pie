import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsDashboardComponent } from './forms-dashboard/forms-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormFormatDisplayComponent } from './form-format-display/form-format-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsDashboardComponent,
    FormFormatDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

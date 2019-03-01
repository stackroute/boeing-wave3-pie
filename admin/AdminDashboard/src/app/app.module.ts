import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsDashboardComponent } from './forms-dashboard/forms-dashboard.component';
import { DisplayAllFormsComponent } from './display-all-forms/display-all-forms.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { AddNewFormComponent } from './add-new-form/add-new-form.component';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsDashboardComponent,
    DisplayAllFormsComponent,
    DisplayFormComponent,
    AddNewFormComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllFormsComponent } from './display-all-forms/display-all-forms.component';

const routes: Routes = [{path: 'display-all-forms', component: DisplayAllFormsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

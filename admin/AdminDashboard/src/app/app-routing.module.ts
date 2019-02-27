import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAllFormsComponent } from './display-all-forms/display-all-forms.component';
import { DisplayFormComponent } from './display-form/display-form.component';

const routes: Routes = [{path: 'display-all-forms', component: DisplayAllFormsComponent},
                        {path: 'display-form', component: DisplayFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

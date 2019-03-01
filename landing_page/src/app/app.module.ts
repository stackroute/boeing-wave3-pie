import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserComponent } from './components/user/user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NewFormFormatComponent } from './components/new-form-format/new-form-format.component';
import { LoginComponent } from './components/login/login.component';
// import { CompanyLoginComponent } from './components/companylogin/companylogin.component';
// import { FormDashboardComponent } from './components/form-dashboard/form-dashboard.component';
import { AddNewPolicyComponent } from './components/add-new-policy/add-new-policy.component';
// import { LoginInsurerComponent } from './components/login-insurer/login-insurer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyRequestsComponent } from './components/my-requests/my-requests.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
  
 } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { httpInterceptorProviders } from './components/auth/auth-interceptor';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { IncomingPortingRequestsComponent } from './components/incoming-porting-requests/incoming-porting-requests.component';
import { OutgoingPortingRequestsComponent } from './components/outgoing-porting-requests/outgoing-porting-requests.component';
import { RegisterComponent } from './components/register/register.component';
import { CompanyComponent } from './components/company/company.component';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { DisplayRequestsComponent } from './components/display-requests/display-requests.component';
import { PortingRequestComponent } from './components/porting-request/porting-request.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UpdateRequestComponent } from './components/update-request/update-request.component';
import { CompanyPolicyDeleteComponent } from './components/company-policy-delete/company-policy-delete.component';
import { GetCompanyPolicyComponent } from './components/get-company-policy/get-company-policy.component';
import { CompanyregisterComponent } from './components/companyregister/companyregister.component';
import { InsurerDashboardComponent } from './components/insurer-dashboard/insurer-dashboard.component';
import { DisplayAllFormsComponent } from './components/display-all-forms/display-all-forms.component';
import { DisplayFormComponent } from './components/display-form/display-form.component';
import { FormsDashboardComponent } from './components/forms-dashboard/forms-dashboard.component';
import { AddNewFormComponent } from './components/add-new-form/add-new-form.component';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    MyRequestsComponent,
    DashboardComponent,
    RecommendationsComponent,
    MyPoliciesComponent,
    AddNewPolicyComponent,
    IncomingPortingRequestsComponent,
    OutgoingPortingRequestsComponent,
    // FormDashboardComponent,
    RegisterComponent,
    NewFormFormatComponent,
    SideBarComponent,
    CompanyComponent,
    UserComponent,
    UserProfileComponent,
    DeleteRequestComponent,
    DisplayRequestsComponent,
    PortingRequestComponent,
    UpdateProfileComponent,
    UpdateRequestComponent,
    CompanyPolicyDeleteComponent,
    GetCompanyPolicyComponent,
    CompanyregisterComponent,
    InsurerDashboardComponent,
    AddNewFormComponent,
    DisplayAllFormsComponent,
    DisplayFormComponent,
    FormsDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSidenavModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {

}

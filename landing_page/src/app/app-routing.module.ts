import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { InsurerDashboardComponent } from './components/insurer-dashboard/insurer-dashboard.component';
import { DisplayRequestsComponent } from './components/display-requests/display-requests.component';
import { CompanyPolicyDeleteComponent } from './components/company-policy-delete/company-policy-delete.component';
import { CompanyregisterComponent } from './components/companyregister/companyregister.component';
import { GetCompanyPolicyComponent } from './components/get-company-policy/get-company-policy.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UpdateRequestComponent } from './components/update-request/update-request.component';
import { DeleteRequestComponent } from './components/delete-request/delete-request.component';
import { PortingRequestComponent } from './components/porting-request/porting-request.component';
// import { FormDashboardComponent } from './components/form-dashboard/form-dashboard.component';
import { OutgoingPortingRequestsComponent } from './components/outgoing-porting-requests/outgoing-porting-requests.component';
import { IncomingPortingRequestsComponent } from './components/incoming-porting-requests/incoming-porting-requests.component';
import { AddNewPolicyComponent } from './components/add-new-policy/add-new-policy.component';
// import { LoginInsurerComponent } from './components/login-insurer/login-insurer.component';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsDashboardComponent } from './components/forms-dashboard/forms-dashboard.component';

const routes: Routes = [
  {path: 'search/:value', component: SearchComponent},
  {path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  {path:'register', component:RegisterComponent},
  { path: 'dashboard/:username', component: DashboardComponent},
  {path: 'recommendations/:username', component: RecommendationsComponent},
  {path: 'mypolicies/:username', component: MyPoliciesComponent},
  // {path:'companylogin', component: LoginInsurerComponent},
  {path: 'newPolicyForm', component: AddNewPolicyComponent},
  {path: 'incomingPortingRequest/:insurerLicense', component: IncomingPortingRequestsComponent},
 {path:'outgoingPortingRequest/:insurerLicense', component: OutgoingPortingRequestsComponent},
  {path: 'admin', component:FormsDashboardComponent},
    {path: 'porting', component:PortingRequestComponent},
   {path: 'deleteRequest/:requestId', component:DeleteRequestComponent},
   {path: 'updateRequest/:requestId', component:UpdateRequestComponent},
   {path: 'myprofile/:username', component:UserProfileComponent},
   {path: 'updateProfile/:username', component:UpdateProfileComponent},
   {path:'newPolicyForm', component:AddNewPolicyComponent},
   {path:'myCompanyPolicy/:insurerLicense',component:GetCompanyPolicyComponent},
   {path:'deletePolicy/:insurerName/:policyId',component:CompanyPolicyDeleteComponent},
   {path: 'companyregister', component: CompanyregisterComponent},
   {path: 'myrequests/:username',component: DisplayRequestsComponent},
   {path: 'insurerDashboard/:insurerLicense',component:InsurerDashboardComponent},
   {path: 'about',component:AboutComponent},
   {path: 'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

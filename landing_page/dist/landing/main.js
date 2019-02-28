(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_insurer_dashboard_insurer_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/insurer-dashboard/insurer-dashboard.component */ "./src/app/components/insurer-dashboard/insurer-dashboard.component.ts");
/* harmony import */ var _components_display_requests_display_requests_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/display-requests/display-requests.component */ "./src/app/components/display-requests/display-requests.component.ts");
/* harmony import */ var _components_company_policy_delete_company_policy_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/company-policy-delete/company-policy-delete.component */ "./src/app/components/company-policy-delete/company-policy-delete.component.ts");
/* harmony import */ var _components_companyregister_companyregister_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/companyregister/companyregister.component */ "./src/app/components/companyregister/companyregister.component.ts");
/* harmony import */ var _components_get_company_policy_get_company_policy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/get-company-policy/get-company-policy.component */ "./src/app/components/get-company-policy/get-company-policy.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/update-request/update-request.component */ "./src/app/components/update-request/update-request.component.ts");
/* harmony import */ var _components_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/delete-request/delete-request.component */ "./src/app/components/delete-request/delete-request.component.ts");
/* harmony import */ var _components_porting_request_porting_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/porting-request/porting-request.component */ "./src/app/components/porting-request/porting-request.component.ts");
/* harmony import */ var _components_form_dashboard_form_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-dashboard/form-dashboard.component */ "./src/app/components/form-dashboard/form-dashboard.component.ts");
/* harmony import */ var _components_outgoing_porting_requests_outgoing_porting_requests_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/outgoing-porting-requests/outgoing-porting-requests.component */ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.ts");
/* harmony import */ var _components_incoming_porting_requests_incoming_porting_requests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/incoming-porting-requests/incoming-porting-requests.component */ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.ts");
/* harmony import */ var _components_add_new_policy_add_new_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/add-new-policy/add-new-policy.component */ "./src/app/components/add-new-policy/add-new-policy.component.ts");
/* harmony import */ var _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-policies/my-policies.component */ "./src/app/my-policies/my-policies.component.ts");
/* harmony import */ var _components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/recommendations/recommendations.component */ "./src/app/components/recommendations/recommendations.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");















// import { LoginInsurerComponent } from './components/login-insurer/login-insurer.component';









var routes = [
    { path: 'search/:value', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'dashboard/:username', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"] },
    { path: 'recommendations/:username', component: _components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_16__["RecommendationsComponent"] },
    { path: 'mypolicies/:username', component: _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_15__["MyPoliciesComponent"] },
    // {path:'companylogin', component: LoginInsurerComponent},
    { path: 'newPolicyForm', component: _components_add_new_policy_add_new_policy_component__WEBPACK_IMPORTED_MODULE_14__["AddNewPolicyComponent"] },
    { path: 'incomingPortingRequest/:insurerLicense', component: _components_incoming_porting_requests_incoming_porting_requests_component__WEBPACK_IMPORTED_MODULE_13__["IncomingPortingRequestsComponent"] },
    { path: 'outgoingPortingRequest/:insurerLicense', component: _components_outgoing_porting_requests_outgoing_porting_requests_component__WEBPACK_IMPORTED_MODULE_12__["OutgoingPortingRequestsComponent"] },
    { path: 'admin', component: _components_form_dashboard_form_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["FormDashboardComponent"] },
    { path: 'porting', component: _components_porting_request_porting_request_component__WEBPACK_IMPORTED_MODULE_10__["PortingRequestComponent"] },
    { path: 'deleteRequest/:requestId', component: _components_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_9__["DeleteRequestComponent"] },
    { path: 'updateRequest/:requestId', component: _components_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_8__["UpdateRequestComponent"] },
    { path: 'myprofile/:username', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"] },
    { path: 'updateProfile/:username', component: _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileComponent"] },
    { path: 'newPolicyForm', component: _components_add_new_policy_add_new_policy_component__WEBPACK_IMPORTED_MODULE_14__["AddNewPolicyComponent"] },
    { path: 'myCompanyPolicy/:insurerLicense', component: _components_get_company_policy_get_company_policy_component__WEBPACK_IMPORTED_MODULE_5__["GetCompanyPolicyComponent"] },
    { path: 'deletePolicy/:insurerName/:policyId', component: _components_company_policy_delete_company_policy_delete_component__WEBPACK_IMPORTED_MODULE_3__["CompanyPolicyDeleteComponent"] },
    { path: 'companyregister', component: _components_companyregister_companyregister_component__WEBPACK_IMPORTED_MODULE_4__["CompanyregisterComponent"] },
    { path: 'myrequests/:username', component: _components_display_requests_display_requests_component__WEBPACK_IMPORTED_MODULE_2__["DisplayRequestsComponent"] },
    { path: 'insurerDashboard/:insurerLicense', component: _components_insurer_dashboard_insurer_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["InsurerDashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_22__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(_route, router) {
        this._route = _route;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        // this.router.navigate(['/home']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _components_new_form_format_new_form_format_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-form-format/new-form-format.component */ "./src/app/components/new-form-format/new-form-format.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_form_dashboard_form_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-dashboard/form-dashboard.component */ "./src/app/components/form-dashboard/form-dashboard.component.ts");
/* harmony import */ var _components_add_new_policy_add_new_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-new-policy/add-new-policy.component */ "./src/app/components/add-new-policy/add-new-policy.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/my-requests/my-requests.component */ "./src/app/components/my-requests/my-requests.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/landing/landing.component */ "./src/app/components/landing/landing.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/auth/auth-interceptor */ "./src/app/components/auth/auth-interceptor.ts");
/* harmony import */ var _components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/recommendations/recommendations.component */ "./src/app/components/recommendations/recommendations.component.ts");
/* harmony import */ var _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./my-policies/my-policies.component */ "./src/app/my-policies/my-policies.component.ts");
/* harmony import */ var _components_incoming_porting_requests_incoming_porting_requests_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/incoming-porting-requests/incoming-porting-requests.component */ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.ts");
/* harmony import */ var _components_outgoing_porting_requests_outgoing_porting_requests_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/outgoing-porting-requests/outgoing-porting-requests.component */ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/delete-request/delete-request.component */ "./src/app/components/delete-request/delete-request.component.ts");
/* harmony import */ var _components_display_requests_display_requests_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/display-requests/display-requests.component */ "./src/app/components/display-requests/display-requests.component.ts");
/* harmony import */ var _components_porting_request_porting_request_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/porting-request/porting-request.component */ "./src/app/components/porting-request/porting-request.component.ts");
/* harmony import */ var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/update-profile/update-profile.component */ "./src/app/components/update-profile/update-profile.component.ts");
/* harmony import */ var _components_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/update-request/update-request.component */ "./src/app/components/update-request/update-request.component.ts");
/* harmony import */ var _components_company_policy_delete_company_policy_delete_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/company-policy-delete/company-policy-delete.component */ "./src/app/components/company-policy-delete/company-policy-delete.component.ts");
/* harmony import */ var _components_get_company_policy_get_company_policy_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/get-company-policy/get-company-policy.component */ "./src/app/components/get-company-policy/get-company-policy.component.ts");
/* harmony import */ var _components_companyregister_companyregister_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/companyregister/companyregister.component */ "./src/app/components/companyregister/companyregister.component.ts");
/* harmony import */ var _components_insurer_dashboard_insurer_dashboard_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/insurer-dashboard/insurer-dashboard.component */ "./src/app/components/insurer-dashboard/insurer-dashboard.component.ts");






// import { CompanyLoginComponent } from './components/companylogin/companylogin.component';


// import { LoginInsurerComponent } from './components/login-insurer/login-insurer.component';



































var routes = [];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"],
                _components_landing_landing_component__WEBPACK_IMPORTED_MODULE_23__["LandingComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_24__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_25__["FooterComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__["SearchComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_my_requests_my_requests_component__WEBPACK_IMPORTED_MODULE_9__["MyRequestsComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_recommendations_recommendations_component__WEBPACK_IMPORTED_MODULE_28__["RecommendationsComponent"],
                _my_policies_my_policies_component__WEBPACK_IMPORTED_MODULE_29__["MyPoliciesComponent"],
                _components_add_new_policy_add_new_policy_component__WEBPACK_IMPORTED_MODULE_7__["AddNewPolicyComponent"],
                _components_incoming_porting_requests_incoming_porting_requests_component__WEBPACK_IMPORTED_MODULE_30__["IncomingPortingRequestsComponent"],
                _components_outgoing_porting_requests_outgoing_porting_requests_component__WEBPACK_IMPORTED_MODULE_31__["OutgoingPortingRequestsComponent"],
                _components_form_dashboard_form_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["FormDashboardComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
                _components_new_form_format_new_form_format_component__WEBPACK_IMPORTED_MODULE_4__["NewFormFormatComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_3__["SideBarComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_33__["CompanyComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"],
                _components_delete_request_delete_request_component__WEBPACK_IMPORTED_MODULE_34__["DeleteRequestComponent"],
                _components_display_requests_display_requests_component__WEBPACK_IMPORTED_MODULE_35__["DisplayRequestsComponent"],
                _components_porting_request_porting_request_component__WEBPACK_IMPORTED_MODULE_36__["PortingRequestComponent"],
                _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_37__["UpdateProfileComponent"],
                _components_update_request_update_request_component__WEBPACK_IMPORTED_MODULE_38__["UpdateRequestComponent"],
                _components_company_policy_delete_company_policy_delete_component__WEBPACK_IMPORTED_MODULE_39__["CompanyPolicyDeleteComponent"],
                _components_get_company_policy_get_company_policy_component__WEBPACK_IMPORTED_MODULE_40__["GetCompanyPolicyComponent"],
                _components_companyregister_companyregister_component__WEBPACK_IMPORTED_MODULE_41__["CompanyregisterComponent"],
                _components_insurer_dashboard_insurer_dashboard_component__WEBPACK_IMPORTED_MODULE_42__["InsurerDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot(routes),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_17__["CarouselModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTreeModule"]
            ],
            providers: [_components_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_27__["httpInterceptorProviders"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_22__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-new-policy/add-new-policy.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add-new-policy/add-new-policy.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n     padding-left: 22%; \n    /* position: relative; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXBvbGljeS9hZGQtbmV3LXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssaUJBQWlCO0lBQ2xCLHdCQUF3QjtBQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLW5ldy1wb2xpY3kvYWRkLW5ldy1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgIHBhZGRpbmctbGVmdDogMjIlOyBcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG59Il19 */"

/***/ }),

/***/ "./src/app/components/add-new-policy/add-new-policy.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/add-new-policy/add-new-policy.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "      \n      <app-insurer-dashboard></app-insurer-dashboard>\n      <br/>\n      <br/>\n      <mat-tab-group style = \"margin-left: 18%;\" mat-align-tabs=\"center\">\n        <mat-tab label=\"First\">\n            <form [formGroup]=\"firstForm\">\n          <mat-form-field  style = \"margin-left: 28%;\">\n          <input  matInput placeholder=\"Insurer Name\" formControlName=\"insurerName\">\n        </mat-form-field>\n        <br>\n        <mat-form-field  style = \"margin-left: 28%;\">\n          <input matInput placeholder=\"Policy Name\" formControlName=\"policyName\">\n        </mat-form-field>\n        <br>\n         <mat-form-field style = \"margin-left: 28%;\">\n          <input matInput placeholder=\"PolicyId\" formControlName=\"policyId\">\n        </mat-form-field>\n            </form>\n        </mat-tab>\n        <mat-tab label=\"Second\">\n            <form [formGroup]=\"secondForm\">\n          <mat-form-field style = \"margin-left: 45%;\">\n          <input matInput placeholder=\"Min Sum Insured\" formControlName=\"minSumInsured\">\n        </mat-form-field>\n        <br>\n        <mat-form-field style = \"margin-left: 45%;\">\n          <input matInput placeholder=\"Max Sum Insured\" formControlName=\"maxSumInsured\">\n        </mat-form-field>\n        <br>\n     \n         <mat-form-field style = \"margin-left: 45%;\">\n          <input matInput placeholder=\"No Of CashLess Hospitals\" formControlName=\"hospitals\">\n        </mat-form-field>\n         </form>\n        </mat-tab>\n        <mat-tab label=\"Third\">\n            <form [formGroup]=\"thirdForm\">\n          <mat-form-field style = \"margin-left: 55%;\">\n          <input matInput placeholder=\"Min Age\" formControlName=\"minAge\">\n        </mat-form-field>\n        <br>\n        <mat-form-field style = \"margin-left: 55%;\">\n          <input matInput placeholder=\"Max Age\" formControlName=\"maxAge\">\n        </mat-form-field>\n        <br>\n         <mat-form-field style = \"margin-left: 55%;\">\n          <input matInput placeholder=\"Waiting Period\" formControlName=\"waitingPeriod\">\n        </mat-form-field>\n        </form>\n      <br>\n      <br>\n      <div style = \"margin-left: 60%;\">\n          <button class=\"btn btn-success btn-outline-rounded\" (click)=\"onSubmit()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n      </div>\n     \n        </mat-tab>\n     \n      </mat-tab-group>\n      <app-footer></app-footer>\n      <router-outlet></router-outlet>\n      "

/***/ }),

/***/ "./src/app/components/add-new-policy/add-new-policy.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add-new-policy/add-new-policy.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddNewPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewPolicyComponent", function() { return AddNewPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/insurer-policy.service */ "./src/app/service/insurer-policy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AddNewPolicyComponent = /** @class */ (function () {
    function AddNewPolicyComponent(formBuilder, router, service) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.service = service;
    }
    AddNewPolicyComponent.prototype.ngOnInit = function () {
        this.firstForm = this.formBuilder.group({
            insurerName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            policyName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            policyId: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondForm = this.formBuilder.group({
            minSumInsured: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maxSumInsured: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            hospitals: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.thirdForm = this.formBuilder.group({
            minAge: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            maxAge: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            waitingPeriod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    AddNewPolicyComponent.prototype.onSubmit = function () {
        console.log("hi");
        var result = Object.assign(this.firstForm.value, this.secondForm.value, this.thirdForm.value);
        console.log('registerForm.value : ', result);
        this.service.addNewPolicy(result).subscribe(function (data) {
            console.log('data is ', data);
            // this.router.navigate(["/login"]);
        }, function (error) {
            console.log('we are getting some errors');
        });
    };
    AddNewPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-add-new-policy',
            template: __webpack_require__(/*! ./add-new-policy.component.html */ "./src/app/components/add-new-policy/add-new-policy.component.html"),
            styles: [__webpack_require__(/*! ./add-new-policy.component.css */ "./src/app/components/add-new-policy/add-new-policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__["InsurerPolicyService"]])
    ], AddNewPolicyComponent);
    return AddNewPolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/auth-interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/auth/auth-interceptor.ts ***!
  \*****************************************************/
/*! exports provided: AuthInterceptor, httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/components/auth/token-storage.service.ts");




var TOKEN_HEADER_KEY = 'Authorization';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(token) {
        this.token = token;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authReq = req;
        var token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());

var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/components/auth/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/components/auth/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.loginUrl = 'http://13.126.73.190:8092/commonauth/api/auth/signin';
        this.signupUrl = 'http://13.126.73.190:8092/userreg/api/auth/signup';
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.attemptAuth = function (credentials) {
        this.loggedIn.next(true);
        return this.http.post(this.loginUrl, credentials, httpOptions);
    };
    AuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/auth/login-info.ts":
/*!***********************************************!*\
  !*** ./src/app/components/auth/login-info.ts ***!
  \***********************************************/
/*! exports provided: AuthLoginInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLoginInfo", function() { return AuthLoginInfo; });
var AuthLoginInfo = /** @class */ (function () {
    function AuthLoginInfo(username, password) {
        this.username = username;
        this.password = password;
    }
    return AuthLoginInfo;
}());



/***/ }),

/***/ "./src/app/components/auth/token-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/token-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUsername = function (username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/components/company-policy-delete/company-policy-delete.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/company-policy-delete/company-policy-delete.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    padding-left: 22%;\n   /* position: relative; */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LXBvbGljeS1kZWxldGUvY29tcGFueS1wb2xpY3ktZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7R0FDbEIsd0JBQXdCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55LXBvbGljeS1kZWxldGUvY29tcGFueS1wb2xpY3ktZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIHBhZGRpbmctbGVmdDogMjIlO1xuICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/company-policy-delete/company-policy-delete.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/company-policy-delete/company-policy-delete.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company-policy-delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/company-policy-delete/company-policy-delete.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/company-policy-delete/company-policy-delete.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CompanyPolicyDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyPolicyDeleteComponent", function() { return CompanyPolicyDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/insurer-policy.service */ "./src/app/service/insurer-policy.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompanyPolicyDeleteComponent = /** @class */ (function () {
    function CompanyPolicyDeleteComponent(route, router, insurerPolicyService) {
        this.route = route;
        this.router = router;
        this.insurerPolicyService = insurerPolicyService;
    }
    CompanyPolicyDeleteComponent.prototype.ngOnInit = function () {
        this.policyId = this.route.snapshot.paramMap.get('policyId');
        this.insurerName = this.route.snapshot.paramMap.get('insurerName');
        console.log(this.policyId);
        console.log(this.insurerName);
        this.insurerPolicyService.deletePolicy(this.insurerName, this.policyId).subscribe(function (policy) { return console.log(policy); });
    };
    CompanyPolicyDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-company-policy-delete',
            template: __webpack_require__(/*! ./company-policy-delete.component.html */ "./src/app/components/company-policy-delete/company-policy-delete.component.html"),
            styles: [__webpack_require__(/*! ./company-policy-delete.component.css */ "./src/app/components/company-policy-delete/company-policy-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__["InsurerPolicyService"]])
    ], CompanyPolicyDeleteComponent);
    return CompanyPolicyDeleteComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  company works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompanyComponent = /** @class */ (function () {
    function CompanyComponent() {
    }
    CompanyComponent.prototype.ngOnInit = function () {
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/companyauth/companyauth.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/companyauth/companyauth.service.ts ***!
  \***************************************************************/
/*! exports provided: CompanyAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAuthService", function() { return CompanyAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CompanyAuthService = /** @class */ (function () {
    function CompanyAuthService(http) {
        this.http = http;
        this.signupUrl = 'http://13.126.73.190:8092/insurerregservice/api/v1/signup';
        this.addPolicyUrl = 'http://13.126.73.190:8092/insurerregservice/api/v1/policy/newpolicy';
    }
    // attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    //   return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    // }
    CompanyAuthService.prototype.signUp = function (info) {
        return this.http.post(this.signupUrl, info, httpOptions);
    };
    CompanyAuthService.prototype.addPolicy = function (policy) {
        return this.http.put(this.addPolicyUrl, policy, httpOptions);
    };
    CompanyAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CompanyAuthService);
    return CompanyAuthService;
}());



/***/ }),

/***/ "./src/app/components/companyauth/token-storage.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/companyauth/token-storage.service.ts ***!
  \*****************************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN_KEY = 'AuthToken';
var USERNAME_KEY = 'AuthUsername';
var AUTHORITIES_KEY = 'AuthAuthorities';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
        this.roles = [];
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveInsurerLicense = function (insurerLicense) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, insurerLicense);
    };
    TokenStorageService.prototype.getUsername = function () {
        return sessionStorage.getItem(USERNAME_KEY);
    };
    TokenStorageService.prototype.saveAuthorities = function (authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    };
    TokenStorageService.prototype.getAuthorities = function () {
        var _this = this;
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(function (authority) {
                _this.roles.push(authority.authority);
            });
        }
        return this.roles;
    };
    TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/components/companyregister/companyregister.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/companyregister/companyregister.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueXJlZ2lzdGVyL2NvbXBhbnlyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/companyregister/companyregister.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/companyregister/companyregister.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-tab-group style = \"margin-left: 0%;\" mat-align-tabs=\"center\">\n    <mat-tab label=\"First\">\n        <form [formGroup]=\"firstForm\">\n      <mat-form-field  style = \"margin-left: 37%;\">\n      <input  matInput placeholder=\"InsurerName\" formControlName=\"insurerName\">\n    </mat-form-field>\n    <br>\n    <mat-form-field  style = \"margin-left: 37%;\">\n      <input matInput placeholder=\"InsurerLicense\" formControlName=\"insurerLicense\">\n    </mat-form-field>\n    <br>\n   \n        </form>\n    </mat-tab>\n    <mat-tab label=\"Second\">\n        <form [formGroup]=\"secondForm\">\n      <mat-form-field style = \"margin-left: 50%;\">\n      <input matInput placeholder=\"email\" formControlName=\"insurerEmail\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style = \"margin-left: 50%;\">\n        <input matInput placeholder=\"Password\" formControlName=\"password\">\n      </mat-form-field>\n      <br>\n   \n      <mat-form-field style = \"margin-left: 50%;\">\n        <input matInput placeholder=\"insurerAddress\" formControlName=\"insurerAddress\">\n      </mat-form-field>\n      <br>\n   \n    <mat-form-field style = \"margin-left: 50%;\">\n      <input matInput placeholder=\"SecurityQuestion\" formControlName=\"securityQuestion\">\n   \n    </mat-form-field>\n    <br>\n    <mat-form-field style = \"margin-left: 50%;\">\n      <input matInput placeholder=\"SecurityAnswer\" formControlName=\"securityAnswer\">\n    </mat-form-field>\n    <br>\n   \n     </form>\n     <div style = \"margin-left: 60%;\">\n        <button class=\"btn btn-success btn-outline-rounded\" (click)=\"submitForm()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n     </div>\n    </mat-tab>\n   \n   </mat-tab-group>\n  \n   <!-- <router-outlet></router-outlet> -->\n   "

/***/ }),

/***/ "./src/app/components/companyregister/companyregister.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/companyregister/companyregister.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyregisterComponent", function() { return CompanyregisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _companyauth_companyauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../companyauth/companyauth.service */ "./src/app/components/companyauth/companyauth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../service/insurer-policy.service */ "./src/app/service/insurer-policy.service.ts");






var CompanyregisterComponent = /** @class */ (function () {
    function CompanyregisterComponent(authService, router, formBuilder, insurerPolicyService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.insurerPolicyService = insurerPolicyService;
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    CompanyregisterComponent.prototype.ngOnInit = function () {
        console.log("abcd");
        this.firstForm = this.formBuilder.group({
            insurerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            insurerLicense: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.secondForm = this.formBuilder.group({
            insurerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            insurerAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            securityQuestion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            securityAnswer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    CompanyregisterComponent.prototype.submitForm = function () {
        console.log("hi");
        var signUpForm = Object.assign(this.firstForm.value, this.secondForm.value);
        console.log('registerForm.value : ', signUpForm);
        this.authService.signUp(signUpForm).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/login']);
    };
    CompanyregisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-companyregister',
            template: __webpack_require__(/*! ./companyregister.component.html */ "./src/app/components/companyregister/companyregister.component.html"),
            styles: [__webpack_require__(/*! ./companyregister.component.css */ "./src/app/components/companyregister/companyregister.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_companyauth_companyauth_service__WEBPACK_IMPORTED_MODULE_1__["CompanyAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_5__["InsurerPolicyService"]])
    ], CompanyregisterComponent);
    return CompanyregisterComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .SignOut {\n  margin-right: 7rem;\n  margin-top: -2rem;\n  z-index: 1;\n}\n\n.example-container {\n  height: 20%;\n  margin: 10px;\n  width: 20%;\n  z-index: 1;\n  \n}  */\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztJQVlJIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuU2lnbk91dCB7XG4gIG1hcmdpbi1yaWdodDogN3JlbTtcbiAgbWFyZ2luLXRvcDogLTJyZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjAlO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIHotaW5kZXg6IDE7XG4gIFxufSAgKi9cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"SignOut\" >\n  <ul class=\"nav navbar-nav navbar-right\">\n    <li class=\"nav-link dropdown\">\n      <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" style=\"font-size: 20px;\"\n        ><span class=\"glyphicon glyphicon-user\" ></span> Sign Out</a\n      >\n      <ul class=\"dropdown-menu\">\n        <li>\n          <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin Login</a>\n        </li>\n        <li>\n          <a routerLink=\"/login\" routerLinkActive=\"active\">User Login</a>\n        </li>\n        <li>\n          <a routerLink=\"/companylogin\" routerLinkActive=\"active\"\n            >Company Login</a\n          >\n        </li>\n      </ul>\n    </li>\n  </ul>\n</div> -->\n<!-- I am in dash -->\n\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(route) {
        this.route = route;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.username = this.route.snapshot.paramMap.get('username');
        var as = window.localStorage.setItem("insuredname", this.username);
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/delete-request/delete-request.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/delete-request/delete-request.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVsZXRlLXJlcXVlc3QvZGVsZXRlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/delete-request/delete-request.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/delete-request/delete-request.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/delete-request/delete-request.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/delete-request/delete-request.component.ts ***!
  \***********************************************************************/
/*! exports provided: DeleteRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRequestComponent", function() { return DeleteRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/request.service */ "./src/app/service/request.service.ts");




var DeleteRequestComponent = /** @class */ (function () {
    function DeleteRequestComponent(_route, router, requestService) {
        this._route = _route;
        this.router = router;
        this.requestService = requestService;
    }
    DeleteRequestComponent.prototype.ngOnInit = function () {
        console.log('delete');
        this.requestId = this._route.snapshot.paramMap.get('requestId');
        console.log('In delete component : ' + this.requestId);
        this.requestService.deleteRequest(this.requestId).subscribe(function (data) {
            console.log(data);
        });
        this.router.navigate(['/myrequests']);
        (function (error) {
            console.log('some error occured in delete component');
            console.log(error.errorMessage);
        });
    };
    DeleteRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-delete-request',
            template: __webpack_require__(/*! ./delete-request.component.html */ "./src/app/components/delete-request/delete-request.component.html"),
            styles: [__webpack_require__(/*! ./delete-request.component.css */ "./src/app/components/delete-request/delete-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]])
    ], DeleteRequestComponent);
    return DeleteRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/display-requests/display-requests.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/display-requests/display-requests.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height:100%;\n}\n.sidenav {\n    /* margin-top: 8%; */\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 20%; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: -1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n    /* opacity: .5; */\n  }\nli{\n    margin: 3rem 0 0 0;\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 2rem;\n    color: #818181;\n    display: block;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #f1f1f1;\n  }\n/* Style page content */\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n/* @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 2rem;}\n   \n  } */\n@media screen and (max-width: 425px) {\n     .sidenav{\n      width: 100%;\n      height: auto;\n      position: relative;\n    }\n    \n   \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXNwbGF5LXJlcXVlc3RzL2Rpc3BsYXktcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVksRUFBRSx1REFBdUQ7SUFDckUsVUFBVSxFQUFFLGlDQUFpQztJQUM3QyxlQUFlLEVBQUUsNENBQTRDO0lBQzdELFdBQVcsRUFBRSxnQkFBZ0I7SUFDN0IsTUFBTSxFQUFFLG9CQUFvQjtJQUM1QixPQUFPO0lBQ1Asc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0Usa0JBQWtCO0FBQ3RCO0FBQ0UsOEJBQThCO0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7RUFDaEI7QUFFQSxpRUFBaUU7QUFDakU7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGlCQUFpQjtFQUNuQjtBQUVBLGdJQUFnSTtBQUNoSTs7OztLQUlHO0FBQ0g7S0FDRztNQUNDLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO0lBQ3BCOzs7QUFHSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1yZXF1ZXN0cy9kaXNwbGF5LXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDoxMDAlO1xufVxuLnNpZGVuYXYge1xuICAgIC8qIG1hcmdpbi10b3A6IDglOyAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbC1oZWlnaHQ6IHJlbW92ZSB0aGlzIGlmIHlvdSB3YW50IFwiYXV0b1wiIGhlaWdodCAqL1xuICAgIHdpZHRoOiAyMCU7IC8qIFNldCB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xuICAgIHotaW5kZXg6IC0xOyAvKiBTdGF5IG9uIHRvcCAqL1xuICAgIHRvcDogMDsgLyogU3RheSBhdCB0aGUgdG9wICovXG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExOyAvKiBCbGFjayAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogRGlzYWJsZSBob3Jpem9udGFsIHNjcm9sbCAqL1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC8qIG9wYWNpdHk6IC41OyAqL1xuICB9XG4gIGxpe1xuICAgIG1hcmdpbjogM3JlbSAwIDAgMDtcbn1cbiAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuICAuc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG4gIC8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuICAuc2lkZW5hdiBhOmhvdmVyIHtcbiAgICBjb2xvcjogI2YxZjFmMTtcbiAgfVxuICBcbiAgLyogU3R5bGUgcGFnZSBjb250ZW50ICovXG4gIC5tYWluIHtcbiAgICBtYXJnaW4tbGVmdDogMTYwcHg7IC8qIFNhbWUgYXMgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbiAgXG4gIC8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZWJhciAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMnJlbTt9XG4gICBcbiAgfSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xuICAgICAuc2lkZW5hdntcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/display-requests/display-requests.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/display-requests/display-requests.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"text-align:center; margin-left: 25%;\">\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12\" style=\"font-size:18px\">My Requests</div>\n      <br /><br /><br /><br />\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div *ngFor=\"let count of requests\" class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Insurer Name: {{ count.insuredName }}</div>\n          <div class=\"panel-body\">\n            <p>Approval Status of X: Pending</p>\n            <p>Created Date: {{count.createDate}}</p>\n            <p>New Policy Name: {{count.newInsurerProduct}}</p>\n          </div>\n          <div class=\"panel-footer\">\n            <a [routerLink]=\"['/deleteRequest', count.portingRequestId]\" class=\"btn btn-primary\" style =\"margin-right: 5%;\"onClick= \"window.location.reload();\">Delete</a>\n            <a [routerLink]=\"['/updateRequest', count.portingRequestId]\" class=\"btn btn-primary\"onClick= \"window.location.reload();\">Update</a>\n           </div>\n        </div>\n        <br/>\n      </div>\n    </div>\n  </div>\n<!-- <app-footer></app-footer> -->\n<!-- <router-outlet></router-outlet> -->\n\n  <!-- <div>\n    <ul *ngFor = \"let count of requests \">\n      <li>\n        {{count.insuredName}}\n      </li>\n      <li>{{track.name}}</li>\n      <li>{{track.comment}}</li>\n     <a [routerLink]=\"['/deleteTrack', track.id]\" class=\"btn btn-primary\">Delete</a>\n      <a [routerLink]=\"['/updateTrack', track.id,track.comment]\" class=\"btn btn-primary\">Update</a>\n    </ul>\n  </div> -->\n"

/***/ }),

/***/ "./src/app/components/display-requests/display-requests.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/display-requests/display-requests.component.ts ***!
  \***************************************************************************/
/*! exports provided: DisplayRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayRequestsComponent", function() { return DisplayRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/request.service */ "./src/app/service/request.service.ts");




var DisplayRequestsComponent = /** @class */ (function () {
    function DisplayRequestsComponent(_route, router, requestService) {
        this._route = _route;
        this.router = router;
        this.requestService = requestService;
    }
    DisplayRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this._route.snapshot.paramMap.get('username');
        console.log('In delete component : ' + this.username);
        this.requests = this.requestService.getRequests(this.username).subscribe(function (data) {
            _this.requests = data;
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
            // tslint:disable-next-line:semicolon
        });
    };
    DisplayRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-display-requests',
            template: __webpack_require__(/*! ./display-requests.component.html */ "./src/app/components/display-requests/display-requests.component.html"),
            styles: [__webpack_require__(/*! ./display-requests.component.css */ "./src/app/components/display-requests/display-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]])
    ], DisplayRequestsComponent);
    return DisplayRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n    display: flex;\n    justify-content: center;\n  }\n  .wrapper i {\n    padding: 10px;\n    text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.6);\n    transition: all ease-in-out 150ms;\n  }\n  .wrapper a:nth-child(1) {\n    color: #dd4b39;\n  }\n  .wrapper a:nth-child(2) {\n    color: #4867AA;\n  }\n  .wrapper a:nth-child(3) {\n    color: red;\n  }\n  .wrapper a:nth-child(4) {\n    color: #1DA1F2;\n  }\n  .wrapper a:nth-child(5) {\n    color:maroon;\n  }\n  .wrapper i:hover {\n    margin-top: -3px;\n    text-shadow: 0px 14px 10px rgba(0, 0, 0, 0.4);\n  }\n  ul li a{\n      text-decoration: none;\n}\n  footerl {\n    background-color: black;\n    color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQiw2Q0FBNkM7RUFDL0M7RUFDQTtNQUNJLHFCQUFxQjtBQUMzQjtFQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC53cmFwcGVyIGkge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTUwbXM7XG4gIH1cbiAgLndyYXBwZXIgYTpudGgtY2hpbGQoMSkge1xuICAgIGNvbG9yOiAjZGQ0YjM5O1xuICB9XG4gIC53cmFwcGVyIGE6bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjogIzQ4NjdBQTtcbiAgfVxuICAud3JhcHBlciBhOm50aC1jaGlsZCgzKSB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuICAud3JhcHBlciBhOm50aC1jaGlsZCg0KSB7XG4gICAgY29sb3I6ICMxREExRjI7XG4gIH1cbiAgLndyYXBwZXIgYTpudGgtY2hpbGQoNSkge1xuICAgIGNvbG9yOm1hcm9vbjtcbiAgfVxuICAud3JhcHBlciBpOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMTRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuICB1bCBsaSBhe1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5mb290ZXJsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"jumbotron nav navbar-nav navbar-inverse\">\n  <b>Are You a Provider?</b>\n  <a href= \"#\">Sign in</a>\n  <ul class = \"list-unstyled\">\n    <li><a href=\"#\">FAQ</a></li>\n    <li><a href=\"#\">Helpdesk</a></li>\n    <li><a href=\"#\">Portability</a></li>\n    <li><a href=\"#\">IRDA</a></li>\n  </ul>\n<div class=\"pull-right\">\n  <section class=\"wrapper\">\n    <a target=\"_blank\" href=\"http://pie-health-insurance-agency.business.site/\"><i class=\"fa fa-3x fa-google-plus\"></i></a>\n    <a target=\"_blank\" href=\"https://www.facebook.com/Pie-1826847107420900/?modal=admin_todo_tour\"><i class=\"fa fa-3x fa-facebook-square\"></i></a>\n    <a target=\"_blank\" href=\"https://www.youtube.com/jr9fmJY_RwHf7EDBfYbmyQ\" ><i class = \"fa fa-3x fa-youtube\"></i></a>\n    <a target=\"_blank\" href=\"#\"><i class=\"fa fa-3x fa-twitter-square\"></i></a>\n    <a target =\"_blank\" href=\"https://pin.it/xn27du3vh6j2y5\"><i class=\"fa fa-3x fa-pinterest\"></i></a>\n  </section>\n</div>\n</div> -->\n\n<footer class=\"page-footer navbar-fixed-bottom font-small pt-4 navbar-inverse\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n      \n        <!-- <hr class=\"clearfix w-100 d-md-none pb-3\"> -->\n        <!-- Grid column -->\n        <div class=\"col-md-3 mb-md-0 mb-3\">\n\n            <!-- Links -->\n            <h5 style = \"color: white\">Are You a Provider?<a [routerLink]=\"['/companyregister']\" routerLinkActive=\"router-link-active\" >Sign up</a></h5>\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"#!\">FAQ</a>\n              </li>\n              <li>\n                <a href=\"#!\">Portability</a>\n              </li>\n              <li>\n                <a href=\"#!\">Helpdesk</a>\n              </li>\n              <li>\n                <a href=\"#!\">IRDA</a>\n              </li>\n            </ul>\n\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <!-- <div class=\"col-md-3 mb-md-0 mb-3\">\n\n            Links\n            <h5 class=\"text-uppercase\">Links</h5>\n\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"#!\">Link 1</a>\n              </li>\n              <li>\n                <a href=\"#!\">Link 2</a>\n              </li>\n              <li>\n                <a href=\"#!\">Link 3</a>\n              </li>\n              <li>\n                <a href=\"#!\">Link 4</a>\n              </li>\n            </ul>\n\n          </div> -->\n          <!-- Grid column -->\n\n      <!-- </div> -->\n      <!-- Grid row -->\n\n    <!-- </div> -->\n    <!-- Footer Links -->\n        <!-- </div> -->\n    <div class = \"wrapper pull-right\">\n    <a target=\"_blank\" href=\"http://pie-health-insurance-agency.business.site/\"><i class=\"fa fa-3x fa-google-plus\"></i></a>\n    <a target=\"_blank\" href=\"https://www.facebook.com/Pie-1826847107420900/?modal=admin_todo_tour\"><i class=\"fa fa-3x fa-facebook-square\"></i></a>\n    <a target=\"_blank\" href=\"https://www.youtube.com/jr9fmJY_RwHf7EDBfYbmyQ\" ><i class = \"fa fa-3x fa-youtube\"></i></a>\n    <a target=\"_blank\" href=\"#\"><i class=\"fa fa-3x fa-twitter-square\"></i></a>\n    <a target =\"_blank\" href=\"https://pin.it/xn27du3vh6j2y5\"><i class=\"fa fa-3x fa-pinterest\"></i></a>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"marqueeMessage\">\n  <marquee id=\"marqueeContent\" onmouseout=\"this.setAttribute('scrollamount', 3, 0);\" onmouseover=\"this.setAttribute('scrollamount', 0, 0);\" direction=\"left\" scrollamount=\"3\">Product information is authentic and solely based on the information received from the Insurer.&nbsp;&nbsp;PIE Service Ltd. under IRDA Registration no. INZ000005231  &amp; MSEI. Corporate office: PIE House, OFF CST Road, Kalina, Mumbai - 400098, Tel. (022) 4009 4400 / 2286 4400.&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;Insurance is the subject matter of solicitation. Visitors are hereby informed that their information submitted on the website may be shared with insurers.&nbsp;-&nbsp;Update your mobile numbers/email IDs with your insurence company. Receive information of your transactions directly from exchange on your mobile/email at the end of the day.&nbsp;&nbsp;|&nbsp;&nbsp;Prevent unauthorized transactions in your account&nbsp;-&nbsp;Update your mobile number with your Participant, to receive alerts on your registered mobile number for all debit and other important transactions in your  account directly from NSDL/CDSL on the same day. - Issued in the interest of the custmers.&nbsp;&nbsp;|&nbsp;&nbsp;SEBI Notification for all investors including retail individual investors for all public issues opening on or after January 01, 2016&nbsp;-&nbsp;No need to issue cheques by investors while subscribing to IPO. Just write the bank account number and sign in the application form to authorise your bank to make payment in case of allotment. No worries for refund as the money remains in investor's account.</marquee>\n </div> -->\n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/form-dashboard/form-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/form-dashboard/form-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS1kYXNoYm9hcmQvZm9ybS1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/form-dashboard/form-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/form-dashboard/form-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Form Management Dashboard</h1>\n<h2>Current Forms</h2>\n<ul>\n  <li *ngFor=\"let formformat of formformats\">\n    <button>{{formformat.formName}}</button>\n    <button (click)=\"deleteFormFormat(formformat)\">Delete</button>\n  </li>\n</ul>\n<!-- <button (click)=\"clickedAddNewFormFormat()\">Add a new form format</button> -->\n<button [routerLink]=\"[ '/new-form-format']\">Add a new form format</button>\n<!-- <button>Add a new form format</button> -->"

/***/ }),

/***/ "./src/app/components/form-dashboard/form-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/form-dashboard/form-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: FormDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDashboardComponent", function() { return FormDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_fetch_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/fetch-forms.service */ "./src/app/service/fetch-forms.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var FormDashboardComponent = /** @class */ (function () {
    // fetchFormsService: FetchFormsService;
    // inject the service first
    function FormDashboardComponent(fetchFormsService) {
        this.fetchFormsService = fetchFormsService;
    }
    FormDashboardComponent.prototype.ngOnInit = function () {
        this.getAllFormFormats();
    };
    FormDashboardComponent.prototype.getAllFormFormats = function () {
        var _this = this;
        this.fetchFormsService.getAllFormFormats().subscribe(function (formformats) { return _this.formformats = formformats; });
    };
    FormDashboardComponent.prototype.deleteFormFormat = function (formformat) {
        console.log(formformat.formId);
        this.fetchFormsService.deleteFormFormat(formformat.formId);
    };
    FormDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-form-dashboard',
            template: __webpack_require__(/*! ./form-dashboard.component.html */ "./src/app/components/form-dashboard/form-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./form-dashboard.component.css */ "./src/app/components/form-dashboard/form-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_fetch_forms_service__WEBPACK_IMPORTED_MODULE_1__["FetchFormsService"]])
    ], FormDashboardComponent);
    return FormDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/get-company-policy/get-company-policy.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/get-company-policy/get-company-policy.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    padding-left: 16%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nZXQtY29tcGFueS1wb2xpY3kvZ2V0LWNvbXBhbnktcG9saWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dldC1jb21wYW55LXBvbGljeS9nZXQtY29tcGFueS1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMTYlO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/get-company-policy/get-company-policy.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/get-company-policy/get-company-policy.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" style=\"text-align:center; margin-bottom:20%;\">\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12\" style=\"font-size:18px\">My policies</div>\n      <br /><br /><br /><br />\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div *ngFor=\"let count of requests\" class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Policy Name: {{ count.policyName }}</div>\n          <div class=\"panel-body\">\n            <p>PolicyId: {{ count.policyId }}</p>\n            <p>Min Sum Insured: {{count.minSumInsured}}</p>\n            <p>Max Sum Insured: {{count.maxSumInsured}}</p>\n            <p>No of Cash Less Hospitals: {{ count.noOfCashLessHospitals }}</p>\n            <p>Min Age: {{count.minAge}}</p>\n            <p>Max Age: {{count.maxAge}}</p>\n            <p>InsurerName: {{count.insurerName}}</p>\n            <p>Waiting Period: {{ count.waitingPeriod }}</p>\n   \n   \n          </div>\n          <div class=\"panel-footer\">\n            <a [routerLink]=\"['/deletePolicy', count.insurerName,count.policyId]\" class=\"btn btn-primary\" style =\"margin-right: 5%;\"onClick= \"window.location.reload();\">Delete</a>\n            <!-- <a [routerLink]=\"['/updateRequest', count.portingRequestId]\" class=\"btn btn-primary\"onClick= \"window.location.reload();\">Update</a> -->\n           </div>\n        </div>\n        <br />\n      </div>\n    </div>\n   </div>\n  <!-- <app-footer></app-footer>\n  <router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/components/get-company-policy/get-company-policy.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/get-company-policy/get-company-policy.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GetCompanyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyPolicyComponent", function() { return GetCompanyPolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/insurer-policy.service */ "./src/app/service/insurer-policy.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var GetCompanyPolicyComponent = /** @class */ (function () {
    function GetCompanyPolicyComponent(_route, router, insurerPolicyService) {
        this._route = _route;
        this.router = router;
        this.insurerPolicyService = insurerPolicyService;
    }
    GetCompanyPolicyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.insurerLicense = this._route.snapshot.paramMap.get('insurerLicense');
        console.log('In delete component : ' + this.insurerLicense);
        this.requests = this.insurerPolicyService.getPolicies(this.insurerLicense).subscribe(function (data) {
            _this.requests = data;
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
            // tslint:disable-next-line:semicolon
        });
    };
    GetCompanyPolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-get-company-policy',
            template: __webpack_require__(/*! ./get-company-policy.component.html */ "./src/app/components/get-company-policy/get-company-policy.component.html"),
            styles: [__webpack_require__(/*! ./get-company-policy.component.css */ "./src/app/components/get-company-policy/get-company-policy.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_insurer_policy_service__WEBPACK_IMPORTED_MODULE_1__["InsurerPolicyService"]])
    ], GetCompanyPolicyComponent);
    return GetCompanyPolicyComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"info.token; else loggedOut\">\n  <h5 class=\"text-primary\">Your Information</h5>\n  <p>\n    <strong>Username:</strong> {{info.username}}<br/>\n     <strong>Roles:</strong> {{info.authorities}}<br />\n    <strong>Token:</strong> {{info.token}}<br/>\n   </p>\n  <button class=\"btn btn-secondary\" (click)=\"logout()\">Logout</button>\n</div> -->\n \n<!-- <ng-template #loggedOut>\n</ng-template>  \n<app-navbar></app-navbar>\n<app-landing></app-landing>\n<app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/components/auth/token-storage.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(token) {
        this.token = token;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
    };
    HomeComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/incoming-porting-requests/incoming-porting-requests.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mypolicy {\n    padding-left: 16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmNvbWluZy1wb3J0aW5nLXJlcXVlc3RzL2luY29taW5nLXBvcnRpbmctcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5jb21pbmctcG9ydGluZy1yZXF1ZXN0cy9pbmNvbWluZy1wb3J0aW5nLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlwb2xpY3kge1xuICAgIHBhZGRpbmctbGVmdDogMTZlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/incoming-porting-requests/incoming-porting-requests.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-insurer-dashboard></app-insurer-dashboard>\n<br>\n<br>\n<br>\n<app-side-bar></app-side-bar> -->\n<!-- <div *ngFor = \"let request of requests\">\n{{ request.portingRequestId }}\n{{ request.insuredName }}\n{{ request.newInsurerName }}\n<button class = \"btn btn-primary\" (click)=\"port(request)\">Accept IncPR</button>\n<button class = \"btn btn-primary\" (click)=\"port1(request)\">Reject IncPR</button>\n  </div> -->\n\n  <div class=\"mypolicy\">\n      <div *ngFor = \"let request of requests\">\n  \n  <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Logo</th>\n          <th>Request ID</th>\n          <th>User Name</th>\n          <th>Old Insurer Name</th>\n          <!-- <th>Sum Insured</th> -->\n          \n          <th>Action</th> \n        </tr>\n      </thead>\n      <tbody>\n          <tr>\n            <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/user.jpeg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n            <td>{{ request.portingRequestId }}</td>\n            <td>{{ request.insuredName }}</td>\n            <td>{{ request.newInsurerName }}</td>\n            <button class = \"btn btn-primary\" (click)=\"port(request)\">Accept Porting</button>\n  <button class = \"btn btn-primary\">Reject Porting</button>\n</tr> \n\n</tbody>\n<tfoot>\n    <tr>\n      <td colspan=\"5\" class=\"text-center\">\n        <div st-pagination=\"\" st-items-by-page=\"itemsByPage\"></div>\n      </td>\n    </tr>\n  </tfoot>\n</table>\n</div> \n</div>\n<br/>\n<br/>\n<br/>\n<!-- <app-footer></app-footer>\n\n<router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/incoming-porting-requests/incoming-porting-requests.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: IncomingPortingRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingPortingRequestsComponent", function() { return IncomingPortingRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_insurer_acceptincomingportingrequest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/insurer-acceptincomingportingrequest.service */ "./src/app/service/insurer-acceptincomingportingrequest.service.ts");
/* harmony import */ var _service_InsurerIncomingportingrequestService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/InsurerIncomingportingrequestService */ "./src/app/service/InsurerIncomingportingrequestService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_InsurerRejectincomingportingrequestService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/InsurerRejectincomingportingrequestService */ "./src/app/service/InsurerRejectincomingportingrequestService.ts");






var IncomingPortingRequestsComponent = /** @class */ (function () {
    function IncomingPortingRequestsComponent(route, incoming, portrequest, portrequest1) {
        this.route = route;
        this.incoming = incoming;
        this.portrequest = portrequest;
        this.portrequest1 = portrequest1;
    }
    IncomingPortingRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("inside Incoming");
        this.insurerLicense = this.route.snapshot.paramMap.get('insurerLicense');
        console.log(this.insurerLicense);
        this.requests = this.incoming.getSearch(this.insurerLicense).subscribe(function (data) {
            _this.requests = data;
            console.log(data);
            console.log("after service method");
        });
    };
    IncomingPortingRequestsComponent.prototype.port = function (request) {
        this.portrequest.getSearch(request).subscribe(function (data) { return console.log(data); });
        this.reloadData();
    };
    IncomingPortingRequestsComponent.prototype.port1 = function (request) {
        this.portrequest1.getSearch(request).subscribe(function (data) { return console.log(data); });
        this.reloadData();
    };
    IncomingPortingRequestsComponent.prototype.reloadData = function () {
        window.location.reload();
    };
    IncomingPortingRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-incoming-porting-requests',
            template: __webpack_require__(/*! ./incoming-porting-requests.component.html */ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.html"),
            styles: [__webpack_require__(/*! ./incoming-porting-requests.component.css */ "./src/app/components/incoming-porting-requests/incoming-porting-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_InsurerIncomingportingrequestService__WEBPACK_IMPORTED_MODULE_2__["InsurerIncomingportingrequestService"], _service_insurer_acceptincomingportingrequest_service__WEBPACK_IMPORTED_MODULE_1__["InsurerAcceptincomingportingrequestService"], src_app_service_InsurerRejectincomingportingrequestService__WEBPACK_IMPORTED_MODULE_5__["InsurerRejectincomingportingrequestService"]])
    ], IncomingPortingRequestsComponent);
    return IncomingPortingRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/insurer-dashboard/insurer-dashboard.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/insurer-dashboard/insurer-dashboard.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zdXJlci1kYXNoYm9hcmQvaW5zdXJlci1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/insurer-dashboard/insurer-dashboard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/insurer-dashboard/insurer-dashboard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidenav\">\n    <ul class =\"list-unstyled\">\n        <li style=\"margin-top:10rem\">\n \n           <a [routerLink]=\"['/myCompanyPolicy',insurerLicense]\" routerLinkActive = \"active\" >My Policies</a>\n   \n        </li>\n        <li>\n\n            <a [routerLink]=\"['/incomingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Incomming Poritng Requests</a>\n        </li>\n   \n   \n      <li>\n          <a [routerLink]=\"['/outgoingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Outing Poritng Requests</a>\n        </li>\n\n      <li><a routerLink='/newPolicyForm' routerLinkActive = \"active\" >Add New Policy</a></li>\n   \n   \n   </ul>\n   </div> -->\n   \n    <!-- <mat-toolbar color=\"warn\" style=\"opacity:0.5;\">\n            <mat-toolbar-row >\n              <button\n                type=\"button\"\n                aria-label=\"Toggle sidenav\"\n                mat-icon-button\n                (click)=\"drawer.toggle()\"\n                color=\"primary\"\n              >\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n              </button>\n              \n                <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" href=\"#\" style=\"margin-bottom: 3.8rem;\">\n                    <img\n                      src=\"./../../assets/img/logo1.png\"\n                      alt=\"Logo\"\n                      class=\"img-responsive\"\n                      width=\"70px\"\n                      height=\"80px\"\n                    />\n                  </a>\n                </div>\n                <div\n                  class=\"collapse navbar-collapse dropdown show\"\n                  id=\"collapsibleNavbar\"\n                >\n                  <ul class=\"nav navbar-nav\">\n                    <li></li>\n                    <li>\n                      <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n                        >Home</a\n                      >\n                    </li>\n                    <li><a href=\"#\">About</a></li>\n                    <li><a href=\"#\">Contact</a></li>\n                  </ul>\n                </div>\n            \n                <div class=\"signin\" style=\" margin-top: 1%;margin-left: 30%;\">\n                  <ul class=\"nav navbar-nav navbar-right\">\n                    <li class=\"nav-link dropdown\"></li>\n                      <a routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logout()\"\n                        ><span class=\"glyphicon glyphicon-user\"></span> Sign Out</a>\n                  </ul>\n                </div>\n          \n            </mat-toolbar-row>\n          </mat-toolbar>\n          <mat-sidenav-container class=\"example-container\" >\n            <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n              <mat-nav-list>\n           \n                <a mat-list-item [routerLink]=\"['/myCompanyPolicy',insurerLicense]\" routerLinkActive = \"active\" >My Policies</a>\n                <a mat-list-item [routerLink]=\"['/incomingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Incoming Porting Requests</a>\n                <a mat-list-item [routerLink]=\"['/outgoingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Outgoing Porting Requests</a>\n                <a mat-list-item [routerLink]=\"['/newPolicyForm']\" routerLinkActive = \"active\" >Add New Policy</a>\n              </mat-nav-list>\n            </mat-sidenav>\n            <mat-sidenav-content>\n              <router-outlet></router-outlet>\n            </mat-sidenav-content>\n          </mat-sidenav-container> \n        <app-footer></app-footer>\n        <router-outlet></router-outlet>\n         -->"

/***/ }),

/***/ "./src/app/components/insurer-dashboard/insurer-dashboard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/insurer-dashboard/insurer-dashboard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: InsurerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerDashboardComponent", function() { return InsurerDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var InsurerDashboardComponent = /** @class */ (function () {
    function InsurerDashboardComponent(route) {
        this.route = route;
    }
    InsurerDashboardComponent.prototype.ngOnInit = function () {
        this.insurerLicense = this.route.snapshot.paramMap.get('insurerLicense');
        var company = window.localStorage.setItem("insurername", this.insurerLicense);
    };
    InsurerDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-insurer-dashboard',
            template: __webpack_require__(/*! ./insurer-dashboard.component.html */ "./src/app/components/insurer-dashboard/insurer-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./insurer-dashboard.component.css */ "./src/app/components/insurer-dashboard/insurer-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], InsurerDashboardComponent);
    return InsurerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/landing/landing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/landing/landing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/landing/landing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/landing/landing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Image carousel section-->\n <carousel [noPause]=\"noPause\">\n  <slide>\n    <img src=\"./../assets/img/heroimage1.jpg\" alt=\"First slide\"  height = \"400px\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3></h3>\n      <!-- <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->\n    </div>\n  </slide>\n  <slide>\n    <img src=\"./../assets/img/heroimage2.jpeg\" alt=\"Second slide\" height = \"400px\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <!-- <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->\n    </div>\n  </slide>\n  <slide>\n    <img src=\"./../assets/img/heroimage3.jpeg\" alt=\"Third slide\" height = \"400px\" style=\"display: block; width: 100%;\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <!-- <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->\n    </div>\n  </slide>\n  <slide>\n      <img src=\"./../assets/img/heroimage4.jpg\" alt=\"Third slide\" height = \"400px\" style=\"display: block; width: 100%;\">\n      <div class=\"carousel-caption d-none d-md-block\">\n        <!-- <h3>Fourth slide label</h3>\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> -->\n      </div>\n    </slide>\n </carousel>\n <br/>\n \n<p class = \"container\">\n  Pie is an online platform that aggregates insurance plans and serves as a marketplace for policies.\n</p>"

/***/ }),

/***/ "./src/app/components/landing/landing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/landing/landing.component.ts ***!
  \*********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () {
    };
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/components/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row col-sm-6\" style=\"max-width:350px; margin-left: 35%\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\" #username=\"ngModel\"\n          required />\n        <div *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\" #password=\"ngModel\"\n          required minlength=\"6\" />\n        <div *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">Password must be at least 6 characters</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <div *ngIf=\"f.submitted && isLoginFailed \" class=\"alert alert-danger\">\n              Login failed: {{errorMessage}}\n            </div>\n        <button class=\"btn btn-primary\">Login</button>\n       \n      </div>\n    </form>\n    <hr />\n    <p>Don't have an account?</p>\n    <a [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\"  class=\"btn btn-success\">Sign Up</a>\n  <!-- </div> -->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/token-storage.service */ "./src/app/components/auth/token-storage.service.ts");
/* harmony import */ var _auth_login_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/login-info */ "./src/app/components/auth/login-info.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getAuthorities();
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.form);
        this.loginInfo = new _auth_login_info__WEBPACK_IMPORTED_MODULE_5__["AuthLoginInfo"](this.form.username, this.form.password);
        this.authService.attemptAuth(this.loginInfo).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUsername(data.username);
            _this.tokenStorage.saveAuthorities(data.authorities);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            if (_this.tokenStorage.getToken()) {
                _this.roles = _this.tokenStorage.getAuthorities();
                _this.roles.every(function (role) {
                    if (role === 'ROLE_USER') {
                        _this.router.navigate(['/dashboard', _this.form.username]);
                        return true;
                    }
                    else if (role === 'ROLE_INSURER') {
                        _this.router.navigate(['/insurerDashboard', _this.form.username]);
                        return true;
                    }
                });
            }
            (function (error) {
                console.log(error);
                _this.errorMessage = error.error.message;
                _this.isLoginFailed = true;
            });
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        window.location.reload();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/my-requests/my-requests.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/my-requests/my-requests.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    margin-left: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1yZXF1ZXN0cy9teS1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1yZXF1ZXN0cy9teS1yZXF1ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-requests/my-requests.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-requests/my-requests.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"container\" style=\"position:center\">\n        <div >\n              <p>InsuredId : {{requestObj.insuredId}}</p>\n              <div *ngFor=\"let item of requestObj.requests\">\n                  <ul class=\"list-unstyled components\">\n                    <li>Request Id : {{item.requestId}}</li>\n                    <li>Request Status : {{item.requestStatus}}</li>\n                    <li>Insurance Company : {{item.newInsuranceCompany}}</li>\n                    <li>Policy name : {{item.newPolicyName}}</li>\n                  </ul>\n              </div>\n              </div>\n        </div>\n          \n           \n                \n      \n     "

/***/ }),

/***/ "./src/app/components/my-requests/my-requests.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-requests/my-requests.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsComponent", function() { return MyRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/user-dashboard.service */ "./src/app/service/user-dashboard.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyRequestsComponent = /** @class */ (function () {
    function MyRequestsComponent(route, router, dashboardService) {
        this.route = route;
        this.router = router;
        this.dashboardService = dashboardService;
    }
    MyRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('xzxm');
        this.insuredId = this.route.snapshot.paramMap.get('id');
        console.log('In requests component : ' + this.insuredId);
        this.requestObj = this.dashboardService.getRequests(this.insuredId).subscribe(function (data) {
            _this.requestObj = data;
            console.log('request' + _this.requestObj.insuredId);
            // console.log(this.requestObj.requests.get(0));
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
            // tslint:disable-next-line:semicolon
        });
    };
    MyRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-requests',
            template: __webpack_require__(/*! ./my-requests.component.html */ "./src/app/components/my-requests/my-requests.component.html"),
            styles: [__webpack_require__(/*! ./my-requests.component.css */ "./src/app/components/my-requests/my-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["UserDashboardService"]])
    ], MyRequestsComponent);
    return MyRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* #form-buscar{\n    width:30rem;\n \n    margin:2rem auto auto auto;\n }\n #collapsibleNavbar li{\n    margin-top: 5%;\n    height: 3%;\n } */\n\n/*  \n .signin a{\n   margin-top: auto;\n   margin-bottom: auto;\n } */\n\n/* @media only screen and (max-width: 425px){\n    #form-buscar{\n        width: auto;\n        margin: auto;\n    }\n} */\n\n.example-container {\n  \n    margin: 10px;\n    height: 100%;\n    z-index: 1;\n    \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0lBUUk7O0FBRUo7Ozs7SUFJSTs7QUFHSjs7Ozs7R0FLRzs7QUFHSDs7SUFFSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7O0VBRVoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qICNmb3JtLWJ1c2NhcntcbiAgICB3aWR0aDozMHJlbTtcbiBcbiAgICBtYXJnaW46MnJlbSBhdXRvIGF1dG8gYXV0bztcbiB9XG4gI2NvbGxhcHNpYmxlTmF2YmFyIGxpe1xuICAgIG1hcmdpbi10b3A6IDUlO1xuICAgIGhlaWdodDogMyU7XG4gfSAqL1xuXG4vKiAgXG4gLnNpZ25pbiBhe1xuICAgbWFyZ2luLXRvcDogYXV0bztcbiAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gfSAqL1xuXG4gXG4vKiBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KXtcbiAgICAjZm9ybS1idXNjYXJ7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxufSAqL1xuIFxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #loggedOut>\n\n<nav class=\"navbar navbar-light\" style=\"background-color:  #ffe6e6; height:85px;\">\n      <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">\n       <img src=\"./../../assets/img/logo1.png\" alt=\"Logo\" class = \"img-responsive\" width = \"70px\" height = \"90px\" >\n     </a>\n          </div>\n<div class=\"collapse navbar-collapse dropdown show\" id=\"collapsibleNavbar\">\n  <ul class=\"nav navbar-nav\">\n      <li></li>\n    <li><a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\" >Home</a></li>\n    <li><a href=\"#\">About</a></li>\n    <li><a href=\"#\">Contact</a></li>\n  </ul>\n      <form class=\"navbar-form navbar-left\" (ngSubmit) = \"search()\" style=\"margin-left:15%;margin-top: 2%;\">\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" placeholder=\"Search\">\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-success\" type=\"submit\">\n              <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n   \n    <div class=\"signin\" style=\" margin-top: 1%;\">\n      <ul class=\"nav navbar-nav navbar-right\">\n      \n          <a  [routerLink]=\"['/login']\" ><span class=\"glyphicon glyphicon-user\" ></span> Sign In</a>\n          \n     \n    </ul>\n    </div>\n</div>\n</div>\n\n</nav>\n</ng-template>\n <mat-toolbar color=\"warn\" *ngIf=\"info.token;else loggedOut\" style=\"opacity:0.5\">\n  <mat-toolbar-row><button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\" color=\"primary\">\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n    \n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" style=\"margin-bottom: 3.8rem;\">\n        <img\n          src=\"./../../assets/img/logo1.png\"\n          alt=\"Logo\"\n          class=\"img-responsive\"\n          width=\"70px\"\n          height=\"80px\"\n        />\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse dropdown show\" id=\"collapsibleNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li></li>\n        <li>\n          <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n            >Home</a\n          >\n        </li>\n        <li><a href=\"#\">About</a></li>\n        <li><a href=\"#\">Contact</a></li>\n      </ul>\n    </div>\n    <div>\n      <form\n        class=\"navbar-form navbar-left\"\n        (ngSubmit)=\"search()\"\n        style=\"margin-left:30%;margin-bottom: 1%;\"\n      >\n        <div class=\"input-group\" style=\"margin-bottom:1%;\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" />\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-success\" type=\"submit\">\n              <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"signout\" style=\" margin-top: 1%;margin-left: 30%;\">\n      <ul class=\"nav navbar-nav navbar-right\">\n    \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n</mat-toolbar-row>\n</mat-toolbar> \n<mat-sidenav-container class=\"example-container\" *ngIf=\"(info.token)&&((dashboard()));\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n    <mat-nav-list>\n      <a\n        mat-list-item\n        [routerLink]=\"['/mypolicies', insuredName]\"\n        routerLinkActive=\"active\"\n        >My Policies</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/recommendations', insuredName]\"\n        routerLinkActive=\"active\"\n        >Recommendations</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/myrequests', insuredName]\"\n        routerLinkActive=\"active\"\n        >My Requests</a\n      >\n      <a mat-list-item [routerLink]=\"['/porting']\" routerLinkActive=\"active\"\n        >Porting Request</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/myprofile', insuredName]\"\n        routerLinkActive=\"active\"\n        >My profile</a\n      >\n      \n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<mat-sidenav-container class=\"example-container\" *ngIf=\"(info.token)&&(!(dashboard()))\" >\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n    <mat-nav-list>\n      \n      <a mat-list-item [routerLink]=\"['/myCompanyPolicy',insurerName]\" routerLinkActive = \"active\" >My Policies</a>\n      <a mat-list-item [routerLink]=\"['/incomingPortingRequest',insurerName]\" routerLinkActive = \"active\" > Incoming Porting Requests</a>\n      <a mat-list-item [routerLink]=\"['/outgoingPortingRequest',insurerName]\" routerLinkActive = \"active\" > Outgoing Porting Requests</a>\n      <a mat-list-item [routerLink]=\"['/newPolicyForm']\" routerLinkActive = \"active\" >Add New Policy</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n<!-- <div *ngIf=\"info.token;else loggedOut\"> -->\n<!-- <mat-toolbar color=\"warn\" style=\"opacity:0.5;\">\n    <mat-toolbar-row >\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        color=\"primary\"\n      >\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      \n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"#\" style=\"margin-bottom: 3.8rem;\">\n            <img\n              src=\"./../../assets/img/logo1.png\"\n              alt=\"Logo\"\n              class=\"img-responsive\"\n              width=\"70px\"\n              height=\"80px\"\n            />\n          </a>\n        </div>\n        <div\n          class=\"collapse navbar-collapse dropdown show\"\n          id=\"collapsibleNavbar\"\n        >\n          <ul class=\"nav navbar-nav\">\n            <li></li>\n            <li>\n              <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n                >Home</a\n              >\n            </li>\n            <li><a href=\"#\">About</a></li>\n            <li><a href=\"#\">Contact</a></li>\n          </ul>\n        </div>\n        <div>\n            <form #createForm=\"ngForm\" (ngSubmit)=\"search()\" id=\"form-buscar\">\n                 <div class=\"form-group\"> -->\n                <!-- <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" placeholder=\"Search\">\n                        <span class=\"input-group-btn\">\n                      <button class=\"btn btn-success\" type=\"submit\" id=\"button-addon2\">\n                     <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i> </button>\n                      </span>\n                    \n                  </div>\n                </form>\n        </div>\n        <div class=\"signin\" style=\" margin-top: 1%;margin-left: 30%;\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li class=\"nav-link dropdown\"></li>\n              <a routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"logout()\"\n                ><span class=\"glyphicon glyphicon-user\"></span> Sign Out</a>\n          </ul>\n        </div>\n  \n    </mat-toolbar-row>\n  </mat-toolbar>\n   --> \n\n<!-- \n  <nav\n    class=\"navbar navbar-light\"\n    style=\"background-color:  #ffe6e6; height:85px;\"\n  >\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">\n          <img\n            src=\"./../../assets/img/logo1.png\"\n            alt=\"Logo\"\n            class=\"img-responsive\"\n            width=\"70px\"\n            height=\"90px\"\n          />\n        </a>\n      </div>\n      <div\n        class=\"collapse navbar-collapse dropdown show\"\n        id=\"collapsibleNavbar\"\n      >\n        <ul class=\"nav navbar-nav\">\n          <li></li>\n          <li>\n            <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n              >Home</a\n            >\n          </li>\n          <li><a href=\"#\">About</a></li>\n          <li><a href=\"#\">Contact</a></li>\n        </ul>\n        <form #createForm=\"ngForm\" (ngSubmit)=\"search()\" id=\"form-buscar\">\n          \n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" placeholder=\"Search\">\n                    <span class=\"input-group-btn\">\n                  <button class=\"btn btn-success\" type=\"submit\" id=\"button-addon2\">\n                 <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i> </button>\n                  </span>\n               \n              </div>\n            </form>\n\n        <div class=\"signin\" >\n          <ul class=\"nav navbar-nav navbar-right\" style=\"margin-bottom:100px;\">\n            <a class=\"nav-link\" routerLink=\"/login\"\n              ><span class=\"glyphicon glyphicon-user\"> </span> Sign In</a\n            >\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav> -->\n\n<!-- <router-outlet></router-outlet> -->\n\n      <!-- <mat-toolbar\n  color=\"warn\"\n  *ngIf=\"info.token&&(!(dashboard()))\"\n  style=\"opacity:0.5;\"\n>\n  <mat-toolbar-row>\n    <button\n      type=\"button\"\n      aria-label=\"Toggle sidenav\"\n      mat-icon-button\n      (click)=\"drawer.toggle()\"\n      color=\"primary\"\n    >\n      <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n    </button>\n\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\" style=\"margin-bottom: 3.8rem;\">\n        <img\n          src=\"./../../assets/img/logo1.png\"\n          alt=\"Logo\"\n          class=\"img-responsive\"\n          width=\"70px\"\n          height=\"80px\"\n        />\n      </a>\n    </div>\n    <div class=\"collapse navbar-collapse dropdown show\" id=\"collapsibleNavbar\">\n      <ul class=\"nav navbar-nav\">\n        <li></li>\n        <li>\n          <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n            >Home</a\n          >\n        </li>\n        <li><a href=\"#\">About</a></li>\n        <li><a href=\"#\">Contact</a></li>\n      </ul>\n    </div>\n    <div>\n      <form\n        class=\"navbar-form navbar-left\"\n        (ngSubmit)=\"search()\"\n        style=\"margin-left:30%;margin-bottom: 1%;\"\n      >\n        <div class=\"input-group\" style=\"margin-bottom:1%;\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search\" />\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-success\" type=\"submit\">\n              <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i>\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"signout\" style=\" margin-top: 1%;margin-left: 30%;\">\n      <ul class=\"nav navbar-nav navbar-right\">\n      \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </mat-toolbar-row>\n<mat-sidenav-container class=\"example-container\">\n  <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n    <mat-nav-list>\n        <a\n        mat-list-item\n        [routerLink]=\"['/myCompanyPolicy', insurerLicense]\"\n        routerLinkActive=\"active\"\n        >My Policies</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/incomingPortingRequest', insurerLicense]\"\n        routerLinkActive=\"active\"\n      >\n        Incomming Poritng Requests</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/outgoingPortingRequest', insurerLicense]\"\n        routerLinkActive=\"active\"\n      >\n        Outing Poritng Requests</a\n      >\n      <a\n        mat-list-item\n        [routerLink]=\"['/newPolicyForm']\"\n        routerLinkActive=\"active\"\n        >Add New Policy</a\n      >\n\n      \n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</mat-toolbar> -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _companyauth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../companyauth/token-storage.service */ "./src/app/components/companyauth/token-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, token) {
        this.router = router;
        this.token = token;
        this.sign = 'SignIn';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.insuredName = window.localStorage.getItem("insuredname");
        this.insurerName = window.localStorage.getItem("insurername");
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        console.log(this.message);
        this.router.events.subscribe(function (event) {
            if (event.constructor.name === "NavigationEnd") {
                _this.name = event.url.split("/").slice(-1)[0];
                _this.isLogin = _this.currentRoute === 'insurerDashboard/:insurerLicense';
            }
        });
    };
    NavbarComponent.prototype.search = function () {
        console.log('search method');
        this.router.navigate(['/search', this.message]);
        console.log("in search");
        window.location.reload();
    };
    NavbarComponent.prototype.logout = function () {
        this.token.signOut();
        window.location.reload();
        this.router.navigate(['/home']);
    };
    NavbarComponent.prototype.dashboard = function () {
        if (this.info.authorities == 'ROLE_USER')
            return true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NavbarComponent.prototype, "login", void 0);
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _companyauth_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-form-format/new-form-format.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/new-form-format/new-form-format.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LWZvcm0tZm9ybWF0L25ldy1mb3JtLWZvcm1hdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/new-form-format/new-form-format.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/new-form-format/new-form-format.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Add a New Form Format</h1>\n<!-- <input>{{newFormFormatName}}</input> -->"

/***/ }),

/***/ "./src/app/components/new-form-format/new-form-format.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/new-form-format/new-form-format.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewFormFormatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewFormFormatComponent", function() { return NewFormFormatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewFormFormatComponent = /** @class */ (function () {
    function NewFormFormatComponent() {
    }
    NewFormFormatComponent.prototype.ngOnInit = function () {
    };
    NewFormFormatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-form-format',
            template: __webpack_require__(/*! ./new-form-format.component.html */ "./src/app/components/new-form-format/new-form-format.component.html"),
            styles: [__webpack_require__(/*! ./new-form-format.component.css */ "./src/app/components/new-form-format/new-form-format.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewFormFormatComponent);
    return NewFormFormatComponent;
}());



/***/ }),

/***/ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mypolicy {\n    padding-left: 11em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vdXRnb2luZy1wb3J0aW5nLXJlcXVlc3RzL291dGdvaW5nLXBvcnRpbmctcmVxdWVzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3V0Z29pbmctcG9ydGluZy1yZXF1ZXN0cy9vdXRnb2luZy1wb3J0aW5nLXJlcXVlc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlwb2xpY3kge1xuICAgIHBhZGRpbmctbGVmdDogMTFlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n <div class=\"mypolicy\">\n    <div *ngFor = \"let request of requests\">\n\n<table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th>Logo</th>\n        <th>Request ID</th>\n        <th>User Name</th>\n        <th>Old Insurer Name</th>\n        <!-- <th>Sum Insured</th> -->\n        \n        <th>Action</th> \n      </tr>\n    </thead>\n    <tbody>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/user.jpeg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n          <td>{{ request.portingRequestId }}</td>\n          <td>{{ request.insuredName }}</td>\n          <td>{{ request.insurerName }}</td>\n          <button class = \"btn btn-primary\" (click)=\"port(request)\">Accept Porting</button>\n<button class = \"btn btn-primary\">Raise Grievence</button>\n\t\t\t\t <!-- <td>20000</td>  -->\n           <!-- <td> \n              <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                  </i></button>\n                <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                  </i></button>\n              </div>\n            </td> -->\n        </tr> \n        <!-- <tr>\n            <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/user.jpeg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n            <td>Max Bupa Cancer</td>\n            <td>Dave</td>\n            <td>ICICI Lombard</td>\n            <td>50000</td> \n           <td>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                    </i></button>\n                  <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                    </i></button>\n                </div>\n              </td>\n          </tr>\n          <tr> \n             <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/user.jpeg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n              <td>Max Bupa Heart Attack</td>\n              <td>Deepak</td>\n              <td>Apollo Munich</td>\n              <td>150000</td> \n                 <td>\n                    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                      <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                        </i></button>\n                      <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                        </i></button>\n                    </div>\n                  </td> \n             </tr>\n            <tr>\n                <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/user.jpeg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n                <td>Max Bupa AIDS</td>\n                <td>Achintya</td>\n                <td>Star Health</td>\n               <td>100000</td> \n                  <td>\n                      <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                        <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                          </i></button>\n                        <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                          </i></button>\n                      </div>\n                    </td>\n              </tr>  -->\n\n    </tbody>\n      <tfoot>\n          <tr>\n            <td colspan=\"5\" class=\"text-center\">\n              <div st-pagination=\"\" st-items-by-page=\"itemsByPage\"></div>\n            </td>\n          </tr>\n        </tfoot>\n      </table>\n  </div> \n  </div>\n  <br/>\n<br/>\n<br/>\n<app-side-bar></app-side-bar>\n\n<!-- <div *ngFor = \"let request of requests\">\nRequest ID {{ request.portingRequestId }}\nUser Name{{ request.insuredName }}\nOld Insurer Name{{ request.insurerName }}\n<button class = \"btn btn-primary\" (click)=\"port(request)\">Accept Porting</button>\n<button class = \"btn btn-primary\">Raise Grievence</button>\n\n  </div> -->\n<!-- <app-footer></app-footer>\n<router-outlet></router-outlet> -->"

/***/ }),

/***/ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: OutgoingPortingRequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutgoingPortingRequestsComponent", function() { return OutgoingPortingRequestsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_insurer_outgoingportingrequest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/insurer-outgoingportingrequest.service */ "./src/app/service/insurer-outgoingportingrequest.service.ts");
/* harmony import */ var src_app_service_insurer_acceptoutgoingportingrequest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/insurer-acceptoutgoingportingrequest.service */ "./src/app/service/insurer-acceptoutgoingportingrequest.service.ts");





var OutgoingPortingRequestsComponent = /** @class */ (function () {
    function OutgoingPortingRequestsComponent(route, incoming, portrequest) {
        this.route = route;
        this.incoming = incoming;
        this.portrequest = portrequest;
    }
    OutgoingPortingRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("inside outgoing");
        this.insurerLicense = this.route.snapshot.paramMap.get('insurerLicense');
        console.log(this.insurerLicense);
        this.requests = this.incoming.getSearch(this.insurerLicense).subscribe(function (data) {
            _this.requests = data;
            console.log(data);
            console.log("after service method");
        });
    };
    OutgoingPortingRequestsComponent.prototype.port = function (request) {
        this.portrequest.getSearch(request).subscribe(function (data) { return console.log(data); });
        this.reloadData();
    };
    OutgoingPortingRequestsComponent.prototype.reloadData = function () {
        window.location.reload();
    };
    OutgoingPortingRequestsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-outgoing-porting-requests',
            template: __webpack_require__(/*! ./outgoing-porting-requests.component.html */ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.html"),
            styles: [__webpack_require__(/*! ./outgoing-porting-requests.component.css */ "./src/app/components/outgoing-porting-requests/outgoing-porting-requests.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_service_insurer_outgoingportingrequest_service__WEBPACK_IMPORTED_MODULE_3__["InsurerOutgoingportingrequestService"], src_app_service_insurer_acceptoutgoingportingrequest_service__WEBPACK_IMPORTED_MODULE_4__["InsurerAcceptoutgoingportingrequestService"]])
    ], OutgoingPortingRequestsComponent);
    return OutgoingPortingRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/porting-request/porting-request.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/porting-request/porting-request.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height:100%;\n}\n.sidenav {\n    /* margin-top: 8%; */\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    width: 20%; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: -1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n    /* opacity: .5; */\n  }\nli{\n    margin: 3rem 0 0 0;\n}\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 2rem;\n    color: #818181;\n    display: block;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #f1f1f1;\n  }\n/* Style page content */\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n/* @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 2rem;}\n   \n  } */\n@media screen and (max-width: 425px) {\n     .sidenav{\n      width: 100%;\n      height: auto;\n      position: relative;\n    }\n    \n   \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3J0aW5nLXJlcXVlc3QvcG9ydGluZy1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixZQUFZLEVBQUUsdURBQXVEO0lBQ3JFLFVBQVUsRUFBRSxpQ0FBaUM7SUFDN0MsZUFBZSxFQUFFLDRDQUE0QztJQUM3RCxXQUFXLEVBQUUsZ0JBQWdCO0lBQzdCLE1BQU0sRUFBRSxvQkFBb0I7SUFDNUIsT0FBTztJQUNQLHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsa0JBQWtCLEVBQUUsOEJBQThCO0lBQ2xELGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGtCQUFrQjtBQUN0QjtBQUNFLDhCQUE4QjtBQUM5QjtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0VBQ2hCO0FBRUEsaUVBQWlFO0FBQ2pFO0lBQ0UsY0FBYztFQUNoQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNFLGtCQUFrQixFQUFFLHFDQUFxQztJQUN6RCxpQkFBaUI7RUFDbkI7QUFFQSxnSUFBZ0k7QUFDaEk7Ozs7S0FJRztBQUNIO0tBQ0c7TUFDQyxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjs7O0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcnRpbmctcmVxdWVzdC9wb3J0aW5nLXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgaGVpZ2h0OjEwMCU7XG59XG4uc2lkZW5hdiB7XG4gICAgLyogbWFyZ2luLXRvcDogOCU7ICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgd2lkdGg6IDIwJTsgLyogU2V0IHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogRml4ZWQgU2lkZWJhciAoc3RheSBpbiBwbGFjZSBvbiBzY3JvbGwpICovXG4gICAgei1pbmRleDogLTE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgdG9wOiAwOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7IC8qIEJsYWNrICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgLyogb3BhY2l0eTogLjU7ICovXG4gIH1cbiAgbGl7XG4gICAgbWFyZ2luOiAzcmVtIDAgMCAwO1xufVxuICAvKiBUaGUgbmF2aWdhdGlvbiBtZW51IGxpbmtzICovXG4gIC5zaWRlbmF2IGEge1xuICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogIzgxODE4MTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcbiAgLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjFmMWYxO1xuICB9XG4gIFxuICAvKiBTdHlsZSBwYWdlIGNvbnRlbnQgKi9cbiAgLm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNjBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGViYXIgKi9cbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuICBcbiAgLyogT24gc21hbGxlciBzY3JlZW5zLCB3aGVyZSBoZWlnaHQgaXMgbGVzcyB0aGFuIDQ1MHB4LCBjaGFuZ2UgdGhlIHN0eWxlIG9mIHRoZSBzaWRlYmFyIChsZXNzIHBhZGRpbmcgYW5kIGEgc21hbGxlciBmb250IHNpemUpICovXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAycmVtO31cbiAgIFxuICB9ICovXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XG4gICAgIC5zaWRlbmF2e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/porting-request/porting-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/porting-request/porting-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <mat-toolbar color=\"warn\"  style=\"opacity:0.5;\">\n        <mat-toolbar-row >\n          <button\n            type=\"button\"\n            aria-label=\"Toggle sidenav\"\n            mat-icon-button\n            (click)=\"drawer.toggle()\"\n            color=\"primary\"\n          >\n            <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n          </button>\n          \n            <div class=\"navbar-header\">\n              <a class=\"navbar-brand\" href=\"#\" style=\"margin-bottom: 3.8rem;\">\n                <img\n                  src=\"./../../assets/img/logo1.png\"\n                  alt=\"Logo\"\n                  class=\"img-responsive\"\n                  width=\"70px\"\n                  height=\"80px\"\n                />\n              </a>\n            </div>\n            <div\n              class=\"collapse navbar-collapse dropdown show\"\n              id=\"collapsibleNavbar\"\n            >\n              <ul class=\"nav navbar-nav\">\n                <li></li>\n                <li>\n                  <a [routerLink]=\"['/home']\" routerLinkActive=\"router-link-active\"\n                    >Home</a\n                  >\n                </li>\n                <li><a href=\"#\">About</a></li>\n                <li><a href=\"#\">Contact</a></li>\n              </ul>\n            </div>\n            <div>\n              <form\n                class=\"navbar-form navbar-left\"\n                (ngSubmit)=\"search()\"\n                style=\"margin-left:30%;margin-bottom: 1%;\"\n              >\n                <div class=\"input-group\" style=\"margin-bottom:1%;\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search\" />\n                  <div class=\"input-group-btn\" >\n                    <button class=\"btn btn-success\" type=\"submit\">\n                      <i class=\"glyphicon glyphicon-search\" aria-hidden=\"true\"></i>\n                    </button>\n                  </div>\n                </div>\n              </form>\n              \n            </div>\n            <div class=\"signin\" style=\" margin-top: 1%;margin-left: 30%;\">\n              <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"nav-link dropdown\"></li>\n                  <a routerLink=\"/login\" routerLinkActive=\"active\"\n                    ><span class=\"glyphicon glyphicon-user\"></span> Sign Out</a>\n              </ul>\n            </div>\n      \n        </mat-toolbar-row>\n      </mat-toolbar>\n      <mat-sidenav-container class=\"example-container\" >\n        <mat-sidenav #drawer mode=\"side\" opened role=\"navigation\">\n          <mat-nav-list>\n            <a mat-list-item [routerLink]=\"['/mypolicies']\" routerLinkActive=\"active\"\n              >My Policies</a\n            >\n            <a mat-list-item [routerLink]=\"['/recommendations', username]\" routerLinkActive=\"active\"\n            >Recommendations</a\n          >\n            <a\n              mat-list-item\n              [routerLink]=\"['/myrequests', username]\"\n              routerLinkActive=\"active\"\n              >My Requests</a\n            >\n            <a mat-list-item [routerLink]=\"['/porting']\" routerLinkActive=\"active\"\n              >Porting Request</a\n            >\n            <a mat-list-item [routerLink]=\"['/myprofile',username]\" routerLinkActive = \"active\">My profile</a>\n            <a mat-list-item [routerLink]=\"['/myCompanyPolicy',insurerLicense]\" routerLinkActive = \"active\" >My Policies</a>\n            <a mat-list-item [routerLink]=\"['/incomingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Incomming Poritng Requests</a>\n            <a mat-list-item [routerLink]=\"['/outgoingPortingRequest',insurerLicense]\" routerLinkActive = \"active\" > Outing Poritng Requests</a>\n            <a mat-list-item [routerLink]=\"['/newPolicyForm']\" routerLinkActive = \"active\" >Add New Policy</a>\n          </mat-nav-list>\n        </mat-sidenav>\n        <mat-sidenav-content>\n          <router-outlet></router-outlet>\n        </mat-sidenav-content>\n      </mat-sidenav-container>\n       -->\n\n<form [formGroup]=\"portingForm\">\n    <mat-form-field  style = \"margin-left: 28%;\">\n    <input  matInput placeholder=\"Insured Name\" formControlName=\"insuredName\" required/>\n  </mat-form-field>\n  <mat-form-field  style = \"margin-left: 28%;\">\n    <input matInput placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" required/>\n  </mat-form-field>\n  <br>\n   <mat-form-field style = \"margin-left: 28%;\">\n    <input matInput placeholder=\"Address\" formControlName=\"insuredAddress\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing policy name\" formControlName=\"insurerProduct\" required/>\n    </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing sum insured\" formControlName=\"sumInsured\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing Cumulative Bonus\" formControlName=\"cumulativeBonus\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Add-ons\" formControlName=\"addOns\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing Policy Number\" formControlName=\"policyNumber\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Policy Name\" formControlName=\"newInsurerProduct\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Sum Insured\" formControlName=\"newSumInsured\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Cumulative Bonus\" formControlName=\"newCumulativeBonus\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Reason for Portability\" formControlName=\"reasonForPortability\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;margin-bottom: 10%;\">\n      <input matInput placeholder=\"No. of Family Members\" formControlName=\"familyMembers\">\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;margin-bottom: 10%;\">\n    <label>Whether the PED exclusion period is longer than the existing policy period</label>\n      <input matInput formControlName=\"exclusionPeriod\" required/>\n  </mat-form-field>\n  <div style = \"margin-left: 50%; margin-bottom:20%;\">\n      <button class=\"btn btn-success btn-outline-rounded\" (click)=\"submitForm()\"> Submit <span style=\"margin-left:10px;\"></span></button>\n  </div>\n </form>\n<!-- <app-footer></app-footer> \n<router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/components/porting-request/porting-request.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/porting-request/porting-request.component.ts ***!
  \*************************************************************************/
/*! exports provided: PortingRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortingRequestComponent", function() { return PortingRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/request.service */ "./src/app/service/request.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PortingRequestComponent = /** @class */ (function () {
    function PortingRequestComponent(formBuilder, requestService, router) {
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.router = router;
    }
    PortingRequestComponent.prototype.ngOnInit = function () {
        var name = window.localStorage.getItem("insuredname");
        this.portingForm = this.formBuilder.group({
            insuredName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            insuredAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            insurerProduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sumInsured: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cumulativeBonus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addOns: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            policyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newInsurerProduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newSumInsured: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newCumulativeBonus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reasonForPortability: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyMembers: [''],
            exclusionPeriod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PortingRequestComponent.prototype.submitForm = function () {
        console.log("hi");
        console.log(this.portingForm);
        var res = Object.assign(this.portingForm.value);
        console.log("hiii" + res);
        this.requestService.postRequest(res).subscribe(function (data) {
            console.log('hel');
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        this.router.navigate(['/dashboard', name]);
    };
    PortingRequestComponent.prototype.logged = function () {
        this.loggedIn = true;
    };
    PortingRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-porting-request',
            template: __webpack_require__(/*! ./porting-request.component.html */ "./src/app/components/porting-request/porting-request.component.html"),
            styles: [__webpack_require__(/*! ./porting-request.component.css */ "./src/app/components/porting-request/porting-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_service_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PortingRequestComponent);
    return PortingRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/recommendations/recommendations.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/recommendations/recommendations.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb25zL3JlY29tbWVuZGF0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/recommendations/recommendations.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/recommendations/recommendations.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"text-align:center; margin-left:20%; margin-bottom: 50%;\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-6\" style=\"font-size:22px\">Recommendations</div>\n    <br /><br /><br /><br />\n  </div>\n  <div class=\"row\" style=\"text-align:center\">\n    <div\n      *ngFor=\"let blog of recommendations\"\n      class=\"col-md-3\"\n    >\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">{{ blog.policyName | uppercase }}</div>\n        <div class=\"panel-body\">\n          <p>Policy Id : {{ blog.policyId }}</p>\n        </div>\n \n        <div class=\"panel-footer\">\n          <br /><br /><a\n            href=\"#\"\n            class=\"btn btn-primary\" onClick=\"window.location.reload();\"\n            >Quick view</a>\n          <a href =\"#\" class =\"btn btn-primary\"> Buy </a>\n        </div>\n      </div>\n \n      <br />\n    </div>\n  </div>\n </div> \n<!-- <app-footer></app-footer>\n<router-outlet></router-outlet> -->\n\n"

/***/ }),

/***/ "./src/app/components/recommendations/recommendations.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/recommendations/recommendations.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecommendationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendationsComponent", function() { return RecommendationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/user-dashboard.service */ "./src/app/service/user-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var RecommendationsComponent = /** @class */ (function () {
    function RecommendationsComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
    }
    RecommendationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userName = this.route.snapshot.paramMap.get('username');
        console.log('recommendations : ' + this.userName);
        this.recommendations = this.userService.getRecommendations(this.userName).subscribe(function (data) {
            _this.recommendations = data;
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    };
    RecommendationsComponent.prototype.ngOnChanges = function (changes) {
        this.router.navigate(['/dashboard', this.userName]);
    };
    RecommendationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-recommendations',
            template: __webpack_require__(/*! ./recommendations.component.html */ "./src/app/components/recommendations/recommendations.component.html"),
            styles: [__webpack_require__(/*! ./recommendations.component.css */ "./src/app/components/recommendations/recommendations.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["UserDashboardService"]])
    ], RecommendationsComponent);
    return RecommendationsComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar></app-navbar> -->\n<mat-tab-group style=\"margin-left: 0%;\" mat-align-tabs=\"center\">\n  <mat-tab label=\"Enter Your Name\">\n    <form [formGroup]=\"firstForm\">\n        \n      <mat-form-field style=\"margin-left: 28%;\">\n        <input\n          matInput\n          placeholder=\"Username\"\n          formControlName=\"username\"\n          required\n        >\n        <mat-error *ngIf=\"isFieldInvalid('username')\">\n             User name is required\n        </mat-error> \n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 28%;\">\n        <input matInput placeholder=\"Email\" formControlName=\"email\" required />\n        <mat-error *ngIf=\"isFieldInvalid('email')\">\n            Email is required\n       </mat-error>\n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 28%;\">\n        <input\n          matInput\n          type=\"password\"\n          placeholder=\"Password\"\n          formControlName=\"password\"\n          required\n        />\n        <mat-error *ngIf=\"isFieldInvalid('password')\">\n           Password must be atleast 6 character long\n       </mat-error>\n      </mat-form-field>\n    </form>\n  </mat-tab>\n  <mat-tab label=\"Fill out other details\">\n    <form [formGroup]=\"secondForm\">\n      <mat-form-field style=\"margin-left: 45%;\">\n        <input\n          matInput\n          placeholder=\"Full Name\"\n          formControlName=\"fullName\"\n          required\n        />\n        <mat-error *ngIf=\"isFieldInvalid('username')\">\n            Name is required\n       </mat-error>\n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 45%;\">\n        <input matInput placeholder=\"age\" formControlName=\"age\" required />\n        <mat-error *ngIf=\"isFieldInvalid('username')\">\n            Age is required\n       </mat-error>\n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 45%;\">\n        <mat-select placeholder=\"Gender\" formControlName=\"gender\">\n          <mat-option value=\"Male\">Male</mat-option>\n          <mat-option value=\"Female\">Female</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 45%;\">\n        <mat-select placeholder=\"Security Question\">\n          <mat-option value=\"option\">What is your favourite food?</mat-option>\n          <mat-option value=\"option\">What is your favourite pet?</mat-option>\n        </mat-select>\n      </mat-form-field>\n      <br />\n      <mat-form-field style=\"margin-left: 45%;\">\n        <input\n          matInput\n          placeholder=\"Security Answer\"\n          formControlName=\"securityAnswer\"\n        />\n        <mat-error *ngIf=\"isFieldInvalid('username')\">\n            Security Answer is required\n       </mat-error>\n      </mat-form-field>\n    </form>\n    <div style=\"margin-left: 60%; margin-bottom: 20%;\">\n      <button\n        class=\"btn btn-success btn-outline-rounded\"\n        (click)=\"submitForm()\"\n      >\n        Submit\n        <span\n          style=\"margin-left:10px;\"\n          class=\"glyphicon glyphicon-arrow-right\"\n        ></span>\n      </button>\n    </div>\n  </mat-tab>\n </mat-tab-group>\n <!-- <app-footer></app-footer>\n <router-outlet></router-outlet> -->\n "

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/components/auth/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        // title = 'Please tell us about yourself.';
        this.form = {};
        this.isSignedUp = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("abcd");
        this.firstForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
        this.secondForm = this.formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            securityAnswer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterComponent.prototype.isFieldInvalid = function (field) {
        return ((!this.firstForm.get(field).valid && this.firstForm.get(field).touched) ||
            (this.firstForm.get(field).untouched && this.formSubmitAttempt));
    };
    RegisterComponent.prototype.submitForm = function () {
        var _this = this;
        console.log("hi");
        var signUpForm = Object.assign(this.firstForm.value, this.secondForm.value);
        console.log('registerForm.value : ', signUpForm);
        this.authService.signUp(signUpForm).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.message;
            _this.isSignUpFailed = true;
        });
        this.router.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngFor=\"let policy1 of policies\" class = \"col-sm-4\" style = \"margin-bottom: 10%; margin-left: 10%;\">\n  <div class = \"card\" style = \"width: 18rem\">\n  <!-- <img class = \"card-img-top\" src = '{{music.image[3][\"#text\"]}}' alt = \"musicimage\" /> -->\n  <div class = \"card-body\">\n      <p class = \"card-text\" >Policy-Name: {{ policy1.policyName }}</p>\n      <p class = \"card-text\">Diseases Covered: </p>\n      <div *ngFor=\"let disease of policy1.diseasesList\">\n              <p class = \"card-text\">{{ disease.diseaseName }}</p>\n      </div>\n      <p class = \"card-text\">Monthly-Premium: {{ policy1.monthlyPremium }}</p>\n      <p class = \"card-text\">Age-Group: {{ policy1.minAge }} - {{ policy1.maxAge }}</p>\n      <p class = \"card-text\">Sum Insured: {{ policy1.sumInsured }}</p>\n      <button class = \"card-footer btn btn-outline-success my-2 my-sm-0 btn-info\" (click) = \"savetrack(music.mbid)\">\n        buy\n      </button>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/search.service */ "./src/app/service/search.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.flag = 0;
        this.policy = {
            policyName: this.policyName,
            diseasesList: this.diseasesList,
            premium: this.premium,
            agegroup: this.agegroup
        };
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("in search");
        this.message = this.route.snapshot.paramMap.get('value');
        console.log("abd" + this.message);
        this.policies = this.searchService.getSearch(this.message).subscribe(function (data) { return _this.policies = data; });
        console.log("fcgvhbj" + this.policies.policyId);
    };
    SearchComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        window.location.reload();
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _service_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    height:100%;\n }\n .sidenav {\n    /* margin-top: 8%; */\n     height:100%;/* Full-height: remove this if you want \"auto\" height */\n    width: 16%; /* Set the width of the sidebar */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: -1; /* Stay on top */\n    top: 0; /* Stay at the top */\n    left: 0;\n    background-color: #111; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n    margin-bottom: 100px;\n    /* opacity: .5; */\n  }\n li{\n    margin: 3rem 0 0 0;\n }\n /* The navigation menu links */\n .sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 2rem;\n    color: #818181;\n    display: block;\n  }\n /* When you mouse over the navigation links, change their color */\n .sidenav a:hover {\n    color: #f1f1f1;\n  }\n /* Style page content */\n .main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n @media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 2rem;}\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztDQUNkO0NBQ0E7SUFDRyxvQkFBb0I7S0FDbkIsV0FBVyxDQUFDLHVEQUF1RDtJQUNwRSxVQUFVLEVBQUUsaUNBQWlDO0lBQzdDLGVBQWUsRUFBRSw0Q0FBNEM7SUFDN0QsV0FBVyxFQUFFLGdCQUFnQjtJQUM3QixNQUFNLEVBQUUsb0JBQW9CO0lBQzVCLE9BQU87SUFDUCxzQkFBc0IsRUFBRSxVQUFVO0lBQ2xDLGtCQUFrQixFQUFFLDhCQUE4QjtJQUNsRCxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjtDQUVBO0lBQ0Usa0JBQWtCO0NBQ3JCO0NBR0MsOEJBQThCO0NBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7RUFDaEI7Q0FFQSxpRUFBaUU7Q0FDakU7SUFDRSxjQUFjO0VBQ2hCO0NBRUEsdUJBQXVCO0NBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGlCQUFpQjtFQUNuQjtDQUVBLGdJQUFnSTtDQUNoSTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICAgIGhlaWdodDoxMDAlO1xuIH1cbiAuc2lkZW5hdiB7XG4gICAgLyogbWFyZ2luLXRvcDogOCU7ICovXG4gICAgIGhlaWdodDoxMDAlOy8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cbiAgICB3aWR0aDogMTYlOyAvKiBTZXQgdGhlIHdpZHRoIG9mIHRoZSBzaWRlYmFyICovXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZCBTaWRlYmFyIChzdGF5IGluIHBsYWNlIG9uIHNjcm9sbCkgKi9cbiAgICB6LWluZGV4OiAtMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICB0b3A6IDA7IC8qIFN0YXkgYXQgdGhlIHRvcCAqL1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTsgLyogQmxhY2sgKi9cbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIERpc2FibGUgaG9yaXpvbnRhbCBzY3JvbGwgKi9cbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAvKiBvcGFjaXR5OiAuNTsgKi9cbiAgfVxuICBcbiAgbGl7XG4gICAgbWFyZ2luOiAzcmVtIDAgMCAwO1xuIH1cbiBcbiBcbiAgLyogVGhlIG5hdmlnYXRpb24gbWVudSBsaW5rcyAqL1xuICAuc2lkZW5hdiBhIHtcbiAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICM4MTgxODE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiBcbiAgLyogV2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgbmF2aWdhdGlvbiBsaW5rcywgY2hhbmdlIHRoZWlyIGNvbG9yICovXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZjFmMWYxO1xuICB9XG4gXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gXG4gIC8qIE9uIHNtYWxsZXIgc2NyZWVucywgd2hlcmUgaGVpZ2h0IGlzIGxlc3MgdGhhbiA0NTBweCwgY2hhbmdlIHRoZSBzdHlsZSBvZiB0aGUgc2lkZWJhciAobGVzcyBwYWRkaW5nIGFuZCBhIHNtYWxsZXIgZm9udCBzaXplKSAqL1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMnJlbTt9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"sidenav\">\n    <ul class =\"list-unstyled\">\n        <li style=\"margin-top:10rem\">\n          \n           <a [routerLink]=\"['/myCompanyPolicy','manasa']\" routerLinkActive = \"active\" >My Policies</a>\n   \n        </li>\n        <li>\n            <a href=\"#\"> Incomming Poritng Requests</a>\n        </li>\n   \n   \n      <li>\n        <a href=\"#\">Outgoing Poritng Requests</a>\n    </li>\n   \n      <li><a routerLink='/newPolicyForm' routerLinkActive = \"active\" >Add New Policy</a></li>\n   \n   \n   </ul>\n   </div> -->\n   \n    <!-- Page content -->"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent() {
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/side-bar/side-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-dashboard></app-dashboard> -->\n<mat-tab-group style = \"margin-left: 0%;\" mat-align-tabs=\"center\">\n    <mat-tab label=\"First\">\n        <form [formGroup]=\"firstForm\">\n      <mat-form-field  style = \"margin-left: 28%;\">\n      <input  matInput placeholder=\"Username\" formControlName=\"username\">\n    </mat-form-field>\n    <br>\n    <mat-form-field  style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Email\" formControlName=\"email\">\n    </mat-form-field>\n    <br>\n     <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n    </mat-form-field>\n        </form>\n    </mat-tab>\n    <mat-tab label=\"Second\">\n        <form [formGroup]=\"secondForm\">\n      <mat-form-field style = \"margin-left: 45%;\">\n      <input matInput placeholder=\"Gender\" formControlName=\"gender\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style = \"margin-left: 45%;\">\n        <input matInput placeholder=\"Insured Id\" formControlName=\"insuredId\">\n      </mat-form-field>\n      <br>\n    <mat-form-field style = \"margin-left: 45%;\">\n      <input matInput placeholder=\"Name\" formControlName=\"fullName\">\n    </mat-form-field>\n \n    <!-- <mat-form-field style = \"margin-left: 45%;\">\n    <mat-select placeholder=\"Select\">\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <br>\n     <mat-form-field style = \"margin-left: 45%;\">\n      <input matInput placeholder=\"Security Answer\" formControlName=\"securityAnswer\">\n    </mat-form-field> -->\n     </form>\n     <div style = \"margin-left: 60%; margin-bottom: 20%;\">\n        <button class=\"btn btn-success btn-outline-rounded\" (click)=\"submitForm()\"> Submit <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span></button>\n     </div>\n \n    </mat-tab>\n \n   </mat-tab-group>\n\n   "

/***/ }),

/***/ "./src/app/components/update-profile/update-profile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-profile/update-profile.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user-dashboard.service */ "./src/app/service/user-dashboard.service.ts");





var UpdateProfileComponent = /** @class */ (function () {
    function UpdateProfileComponent(_route, userService, router, formBuilder) {
        this._route = _route;
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        console.log("abcd");
        this.username = this._route.snapshot.paramMap.get('username');
        this.firstForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
        });
        this.secondForm = this.formBuilder.group({
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            insuredId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    UpdateProfileComponent.prototype.submitForm = function () {
        console.log("hi");
        var signUpForm = Object.assign(this.firstForm.value, this.secondForm.value);
        console.log('registerForm.value : ', signUpForm);
        this.userService.updateProfile(this.username, signUpForm).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UpdateProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-update-profile',
            template: __webpack_require__(/*! ./update-profile.component.html */ "./src/app/components/update-profile/update-profile.component.html"),
            styles: [__webpack_require__(/*! ./update-profile.component.css */ "./src/app/components/update-profile/update-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["UserDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UpdateProfileComponent);
    return UpdateProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/update-request/update-request.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/update-request/update-request.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXJlcXVlc3QvdXBkYXRlLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/update-request/update-request.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/update-request/update-request.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard></app-dashboard> -->\n<form [formGroup]=\"portingForm\">\n    <mat-form-field  style = \"margin-left: 28%;\">\n    <input  matInput placeholder=\"Insured Name\" formControlName=\"insuredName\" required/>\n  </mat-form-field>\n  <mat-form-field  style = \"margin-left: 28%;\">\n    <input matInput placeholder=\"Date of Birth\" formControlName=\"dateOfBirth\" required/>\n  </mat-form-field>\n  <br>\n   <mat-form-field style = \"margin-left: 28%;\">\n    <input matInput placeholder=\"Address\" formControlName=\"insuredAddress\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing policy name\" formControlName=\"insurerProduct\" required/>\n    </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing sum insured\" formControlName=\"sumInsured\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing Cumulative Bonus\" formControlName=\"cumulativeBonus\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Add-ons\" formControlName=\"addOns\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Existing Policy Number\" formControlName=\"policyNumber\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Policy Name\" formControlName=\"newInsurerProduct\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Sum Insured\" formControlName=\"newSumInsured\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"New Cumulative Bonus\" formControlName=\"newCumulativeBonus\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;\">\n      <input matInput placeholder=\"Reason for Portability\" formControlName=\"reasonForPortability\" required/>\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;margin-bottom: 10%;\">\n      <input matInput placeholder=\"No. of Family Members\" formControlName=\"familyMembers\">\n  </mat-form-field>\n  <mat-form-field style = \"margin-left: 28%;margin-bottom: 10%;\">\n    <label>Whether the PED exclusion period is longer than the existing policy period</label>\n      <input matInput formControlName=\"exclusionPeriod\" required/>\n  </mat-form-field>\n  <div style = \"margin-left: 50%; margin-bottom:20%;\">\n      <button class=\"btn btn-success btn-outline-rounded\" (click)=\"submitForm()\"> Submit <span style=\"margin-left:10px;\"></span></button>\n  </div>\n </form>\n <!-- <app-footer></app-footer>\n <router-outlet></router-outlet> -->\n "

/***/ }),

/***/ "./src/app/components/update-request/update-request.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/update-request/update-request.component.ts ***!
  \***********************************************************************/
/*! exports provided: UpdateRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateRequestComponent", function() { return UpdateRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/request.service */ "./src/app/service/request.service.ts");





var UpdateRequestComponent = /** @class */ (function () {
    function UpdateRequestComponent(_route, formBuilder, requestService) {
        this._route = _route;
        this.formBuilder = formBuilder;
        this.requestService = requestService;
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        this.requestId = this._route.snapshot.paramMap.get('requestId');
        this.portingForm = this.formBuilder.group({
            insuredName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            insuredAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            insurerProduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            sumInsured: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cumulativeBonus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            addOns: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            policyNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newInsurerProduct: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newSumInsured: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newCumulativeBonus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            reasonForPortability: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            familyMembers: [''],
            exclusionPeriod: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    UpdateRequestComponent.prototype.submitForm = function () {
        console.log("hi");
        console.log(this.portingForm);
        this.res = Object.assign(this.portingForm.value);
        console.log("hiii" + this.res);
        this.requestService.updateRequest(this.requestId, this.res).subscribe(function (data) {
            console.log('hel');
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    UpdateRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-update-request',
            template: __webpack_require__(/*! ./update-request.component.html */ "./src/app/components/update-request/update-request.component.html"),
            styles: [__webpack_require__(/*! ./update-request.component.css */ "./src/app/components/update-request/update-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_service_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]])
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-dashboard></app-dashboard> -->\n<div style=\"margin-left:30%;\">\n\n    <ul style=\"list-style: none\">\n      <li>Insured Name : {{ profile.username }}</li>\n      <li>Password : {{ profile.password }}</li>\n      <li>Email : {{ profile.email }}</li>\n      <li>Full Name : {{ profile.fullName}}</li>\n      <a [routerLink]=\"['/updateProfile', 'sachinten']\" class=\"btn btn-primary\">Update</a>\n    </ul>\n  </div>\n <!-- <app-footer></app-footer>\n <router-outlet></router-outlet> -->\n "

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user-dashboard.service */ "./src/app/service/user-dashboard.service.ts");




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.username = this.route.snapshot.paramMap.get('username');
        console.log('ts' + this.username);
        this.profile = this.userService.getProfile(this.username);
        console.log("hIIII" + this.profile.username);
        //     data => {
        //       console.log("username: " + data.username);
        //       console.log('jell' + data.email);
        //       this.profile = data;
        //  },
        //     error => {
        //       console.log('some error occured');
        //       console.log(error.errorMessage);
        //     }
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["UserDashboardService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserBoard().subscribe(function (data) {
            _this.board = data;
        }, function (error) {
            _this.errorMessage = error.status + ": " + JSON.parse(error.error).message;
        });
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/my-policies/my-policies.component.css":
/*!*******************************************************!*\
  !*** ./src/app/my-policies/my-policies.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXBvbGljaWVzL215LXBvbGljaWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-policies/my-policies.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-policies/my-policies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <app-dashboard></app-dashboard> -->\n<div class=\"container\">\n<div class=\"mypolicy\" style=\"position:center;\">\n  \n<table class=\"table table-striped\">\n   <thead>\n     <tr>\n       <th>Logo</th>\n       <th>Policy Name</th>\n       <th>Sum Insured</th>\n       <th>Premium</th>\n       <th>Min-Max age</th>\n       <th>Action</th>\n     </tr>\n   </thead>\n   <tbody>\n                <tr>\n                    <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/maxlifebupa.jpg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n                    <td>Max Bupa Normal</td>\n                    <td>200000</td>\n                    <td>2000</td>\n                    \n         <td>\n           20-30\n         </td>\n         <td>\n             <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n               <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                 </i></button>\n               <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                 </i></button>\n             </div>\n           </td>\n       </tr>\n       <tr>\n           <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/maxlifebupa.jpg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n           <td>Max Bupa Cancer</td>\n           <td>500000</td>\n           <td>5000</td>\n           <td>\n               20-30\n           </td>\n           <td>\n               <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                 <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                   </i></button>\n                 <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                   </i></button>\n               </div>\n             </td>\n         </tr>\n         <tr>\n<td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/maxlifebupa.jpg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n             <td>Max Bupa Heart Attack</td>\n             <td>1500000</td>\n             <td>15000</td>\n             <td>\n                 20-30\n               </td>\n               <td>\n                   <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                     <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                       </i></button>\n                     <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                       </i></button>\n                   </div>\n                 </td>\n           </tr>\n           <tr>\n               <td><img class=\"img-thumbnail img-responsive\" alt=\"image\" src=\"./../../assets/img/maxlifebupa.jpg\" alt=\"Logo\" class = \"img-responsive\" style=\"width: 50px; height: 50px;\"/></td>\n               <td>Max Bupa AIDS</td>\n               <td>100000</td>\n               <td>1000</td>\n               <td>\n                   20-30\n                 </td>\n                 <td>\n                     <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                       <button type=\"button\" class=\"btn btn-default\" ng-click=\"editRecord(row.id)\"><i class=\"glyphicon glyphicon-pencil\">\n                         </i></button>\n                       <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deletRecord(row.id)\"><i class=\"glyphicon glyphicon-trash\">\n                         </i></button>\n                     </div>\n                   </td>\n             </tr>\n     </tbody>\n     <tfoot>\n         <tr>\n           <td colspan=\"5\" class=\"text-center\">\n             <div st-pagination=\"\" st-items-by-page=\"itemsByPage\"></div>\n           </td>\n         </tr>\n       </tfoot>\n     </table>\n </div>\n</div>\n <!-- <app-footer></app-footer>\n <router-outlet></router-outlet> -->\n \n <!-- <div class=\"container\" style=\"text-align:center; margin-bottom:20%;\">\n    <div class=\"row\" style=\"text-align:center\">\n      <div class=\"col-md-12\" style=\"font-size:18px\">My policies</div>\n      <br /><br /><br /><br />\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div *ngFor=\"let count of policies\" class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">Policy Name: {{ count.policyName }}</div>\n          <div class=\"panel-body\">\n            <p>PolicyId: {{ count.policyId }}</p>\n            <p>InsurerName: {{count.insurerName}}</p>\n            <p>Monthly Premium: {{ count.monthlyPremium }}</p>\n            <p>Waiting Period: {{ count.waitingPeriod }}</p>\n          </div>\n          <div class=\"panel-footer\">\n            <a [routerLink]=\"['/deletePolicy', count.insurerName,count.policyId]\" class=\"btn btn-primary\" style =\"margin-right: 5%;\"onClick= \"window.location.reload();\">Delete</a>\n             <a [routerLink]=\"['/updateRequest', count.portingRequestId]\" class=\"btn btn-primary\"onClick= \"window.location.reload();\">Update</a> \n           </div>\n        </div>\n        <br />\n      </div>\n    </div>\n   </div>\n   -->"

/***/ }),

/***/ "./src/app/my-policies/my-policies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-policies/my-policies.component.ts ***!
  \******************************************************/
/*! exports provided: MyPoliciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPoliciesComponent", function() { return MyPoliciesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/user-dashboard.service */ "./src/app/service/user-dashboard.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var MyPoliciesComponent = /** @class */ (function () {
    function MyPoliciesComponent(_route, router, userService) {
        this._route = _route;
        this.router = router;
        this.userService = userService;
    }
    MyPoliciesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this._route.snapshot.paramMap.get('username');
        this.policies = this.userService.getPolicies(this.username).subscribe(function (data) {
            _this.policies = data;
            console.log(_this.policies);
        }, function (error) {
            console.log('some error occured');
            console.log(error.errorMessage);
        });
    };
    MyPoliciesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-my-policies',
            template: __webpack_require__(/*! ./my-policies.component.html */ "./src/app/my-policies/my-policies.component.html"),
            styles: [__webpack_require__(/*! ./my-policies.component.css */ "./src/app/my-policies/my-policies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_user_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["UserDashboardService"]])
    ], MyPoliciesComponent);
    return MyPoliciesComponent;
}());



/***/ }),

/***/ "./src/app/service/InsurerIncomingportingrequestService.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service/InsurerIncomingportingrequestService.ts ***!
  \*****************************************************************/
/*! exports provided: InsurerIncomingportingrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerIncomingportingrequestService", function() { return InsurerIncomingportingrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var InsurerIncomingportingrequestService = /** @class */ (function () {
    function InsurerIncomingportingrequestService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.baseUrl = 'http://localhost:8091/api/v1/';
        this.visible = false;
    }
    InsurerIncomingportingrequestService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('in service');
        this.messageSource.next(message);
    };
    InsurerIncomingportingrequestService.prototype.getSearch = function (newInsurerName) {
        return this.http.get(this.baseUrl + 'incomingportingrequest/' + newInsurerName);
    };
    InsurerIncomingportingrequestService.prototype.show = function () {
        this.visible = true;
    };
    InsurerIncomingportingrequestService.prototype.hide = function () {
        this.visible = false;
    };
    InsurerIncomingportingrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], InsurerIncomingportingrequestService);
    return InsurerIncomingportingrequestService;
}());



/***/ }),

/***/ "./src/app/service/InsurerRejectincomingportingrequestService.ts":
/*!***********************************************************************!*\
  !*** ./src/app/service/InsurerRejectincomingportingrequestService.ts ***!
  \***********************************************************************/
/*! exports provided: InsurerRejectincomingportingrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerRejectincomingportingrequestService", function() { return InsurerRejectincomingportingrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var InsurerRejectincomingportingrequestService = /** @class */ (function () {
    function InsurerRejectincomingportingrequestService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.baseUrl = 'http://localhost:8091/api/v1/';
        this.visible = false;
    }
    InsurerRejectincomingportingrequestService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('In rejecting Incoming PR service');
        this.messageSource.next(message);
    };
    InsurerRejectincomingportingrequestService.prototype.getSearch = function (request) {
        return this.http.put(this.baseUrl + 'rejectincomingportingrequest', request);
        console.log('In rejecting Incoming PR service');
    };
    InsurerRejectincomingportingrequestService.prototype.show = function () {
        this.visible = true;
    };
    InsurerRejectincomingportingrequestService.prototype.hide = function () {
        this.visible = false;
    };
    InsurerRejectincomingportingrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsurerRejectincomingportingrequestService);
    return InsurerRejectincomingportingrequestService;
}());



/***/ }),

/***/ "./src/app/service/fetch-forms.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/fetch-forms.service.ts ***!
  \************************************************/
/*! exports provided: FetchFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchFormsService", function() { return FetchFormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FetchFormsService = /** @class */ (function () {
    function FetchFormsService(http) {
        this.http = http;
        // private adminUrl = 'http://localhost:8092/admin/api/v1/formformats';
        this.adminUrl = 'http://13.126.73.190:8092/admin/api/v1/';
        this.getAllFormFormatsUrl = 'formformats';
        this.addNewFormFormatUrl = 'formformat';
        this.deleteFormFormatUrl = 'formformat/';
    }
    FetchFormsService.prototype.getAllFormFormats = function () {
        return this.http.get(this.adminUrl + this.getAllFormFormatsUrl);
    };
    FetchFormsService.prototype.addNewFormFormat = function () {
        return this.http.get(this.adminUrl + this.addNewFormFormatUrl);
    };
    FetchFormsService.prototype.deleteFormFormat = function (formId) {
        console.log(formId);
        console.log(this.adminUrl + this.deleteFormFormatUrl + formId);
        this.http.delete(this.adminUrl + this.deleteFormFormatUrl + formId);
    };
    FetchFormsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FetchFormsService);
    return FetchFormsService;
}());



/***/ }),

/***/ "./src/app/service/insurer-acceptincomingportingrequest.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/service/insurer-acceptincomingportingrequest.service.ts ***!
  \*************************************************************************/
/*! exports provided: InsurerAcceptincomingportingrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerAcceptincomingportingrequestService", function() { return InsurerAcceptincomingportingrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var InsurerAcceptincomingportingrequestService = /** @class */ (function () {
    function InsurerAcceptincomingportingrequestService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.baseUrl = 'http://13.126.73.190:8092/porting/api/v1/';
        this.visible = false;
    }
    InsurerAcceptincomingportingrequestService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('In accepting Incoming PR service');
        this.messageSource.next(message);
    };
    InsurerAcceptincomingportingrequestService.prototype.getSearch = function (request) {
        return this.http.put(this.baseUrl + 'acceptincomingportingrequest', request);
        console.log('In accepting Incoming PR service');
    };
    InsurerAcceptincomingportingrequestService.prototype.show = function () {
        this.visible = true;
    };
    InsurerAcceptincomingportingrequestService.prototype.hide = function () {
        this.visible = false;
    };
    InsurerAcceptincomingportingrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsurerAcceptincomingportingrequestService);
    return InsurerAcceptincomingportingrequestService;
}());



/***/ }),

/***/ "./src/app/service/insurer-acceptoutgoingportingrequest.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/service/insurer-acceptoutgoingportingrequest.service.ts ***!
  \*************************************************************************/
/*! exports provided: InsurerAcceptoutgoingportingrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerAcceptoutgoingportingrequestService", function() { return InsurerAcceptoutgoingportingrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var InsurerAcceptoutgoingportingrequestService = /** @class */ (function () {
    function InsurerAcceptoutgoingportingrequestService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.baseUrl = 'http://13.126.73.190:8092/porting/api/v1/';
        this.visible = false;
    }
    InsurerAcceptoutgoingportingrequestService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('IN accpeting Outgoing PR service');
        this.messageSource.next(message);
    };
    InsurerAcceptoutgoingportingrequestService.prototype.getSearch = function (request) {
        return this.http.put(this.baseUrl + 'acceptoutgoingportingrequest', request);
    };
    InsurerAcceptoutgoingportingrequestService.prototype.show = function () {
        this.visible = true;
    };
    InsurerAcceptoutgoingportingrequestService.prototype.hide = function () {
        this.visible = false;
    };
    InsurerAcceptoutgoingportingrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsurerAcceptoutgoingportingrequestService);
    return InsurerAcceptoutgoingportingrequestService;
}());



/***/ }),

/***/ "./src/app/service/insurer-outgoingportingrequest.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/service/insurer-outgoingportingrequest.service.ts ***!
  \*******************************************************************/
/*! exports provided: InsurerOutgoingportingrequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerOutgoingportingrequestService", function() { return InsurerOutgoingportingrequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var InsurerOutgoingportingrequestService = /** @class */ (function () {
    function InsurerOutgoingportingrequestService(http) {
        this.http = http;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.baseUrl = 'http://13.126.73.190:8092/porting/api/v1/';
        this.visible = false;
    }
    InsurerOutgoingportingrequestService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('in service');
        this.messageSource.next(message);
    };
    InsurerOutgoingportingrequestService.prototype.getSearch = function (insurerName) {
        return this.http.get(this.baseUrl + 'outgoingportingrequest/' + insurerName);
    };
    InsurerOutgoingportingrequestService.prototype.show = function () {
        this.visible = true;
    };
    InsurerOutgoingportingrequestService.prototype.hide = function () {
        this.visible = false;
    };
    InsurerOutgoingportingrequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsurerOutgoingportingrequestService);
    return InsurerOutgoingportingrequestService;
}());



/***/ }),

/***/ "./src/app/service/insurer-policy.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/insurer-policy.service.ts ***!
  \***************************************************/
/*! exports provided: InsurerPolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurerPolicyService", function() { return InsurerPolicyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Access-Control-Allow-Origin': '*',
    })
};
var InsurerPolicyService = /** @class */ (function () {
    function InsurerPolicyService(http) {
        this.http = http;
        this.localUrl = 'http://13.126.73.190:8092/insurerregservice/api/v1/';
    }
    InsurerPolicyService.prototype.addNewPolicy = function (policy) {
        console.log('adadsasdas');
        return this.http.put(this.localUrl + 'policy/newpolicy', policy);
    };
    InsurerPolicyService.prototype.getPolicies = function (insurerLicense) {
        console.log('adadsasdas');
        return this.http.get(this.localUrl + 'policy/display/' + insurerLicense);
    };
    InsurerPolicyService.prototype.deletePolicy = function (insurerName, policyId) {
        console.log(insurerName);
        console.log(policyId);
        return this.http.put(this.localUrl + 'policy/delete/' + insurerName + '/' + policyId, 0);
    };
    InsurerPolicyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InsurerPolicyService);
    return InsurerPolicyService;
}());



/***/ }),

/***/ "./src/app/service/request.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/request.service.ts ***!
  \********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.requestUrl = 'http://13.126.73.190:8092/porting/api/v1/';
        console.log('http service got called');
    }
    RequestService.prototype.postRequest = function (portingForm) {
        console.log('HERE : ' + portingForm);
        var postedRequest = this.http.post(this.requestUrl + 'request', portingForm);
        console.log('hiii' + postedRequest);
        return postedRequest;
    };
    RequestService.prototype.getRequests = function (username) {
        console.log(username);
        var requests = this.http.get(this.requestUrl + 'request/' + username);
        console.log(requests);
        return requests;
    };
    RequestService.prototype.deleteRequest = function (requestId) {
        console.log(requestId);
        var deletedRequest = this.http.delete(this.requestUrl + 'request/' + requestId);
        return deletedRequest;
    };
    RequestService.prototype.updateRequest = function (requestId, form) {
        console.log(requestId);
        var updatedRequest = this.http.put(this.requestUrl + 'request/' + requestId, form);
        return updatedRequest;
    };
    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/service/search.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/search.service.ts ***!
  \*******************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = 'http://13.126.73.190:8092/searchservice/api/v1/';
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        console.log("http search service is called");
        this.visible = false;
    }
    SearchService.prototype.changeMessage = function (message) {
        this.trackName = message;
        console.log('in service');
        this.messageSource.next(message);
    };
    SearchService.prototype.getSearch = function (searchValue) {
        console.log("inside service");
        this.v = this.http.get(this.baseUrl + 'policies/' + searchValue);
        console.log("search policy object " + this.v);
        return this.v;
    };
    SearchService.prototype.show = function () {
        this.visible = true;
    };
    SearchService.prototype.hide = function () {
        this.visible = false;
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/service/user-dashboard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/user-dashboard.service.ts ***!
  \***************************************************/
/*! exports provided: UserDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardService", function() { return UserDashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



// import 'rxjs/add/operator/do';
var UserDashboardService = /** @class */ (function () {
    function UserDashboardService(http) {
        this.http = http;
        this.localMongoUrl = 'http://13.126.73.190:8092/porting/api/auth/requests/';
        this.recommendationsUrl = 'http://172.23.239.158:8086/rest/neo4j/recommendations/policyByAgeGender/';
        this.profileUrl = 'http://13.126.73.190:8092/userreg/api/auth/profile/';
        this.policiesUrl = 'http://13.126.73.190:8092/userreg/api/auth/policy/display/tedaaa';
        console.log('http service got called');
    }
    UserDashboardService.prototype.getRequests = function (userId) {
        console.log(userId);
        var requests = this.http.get(this.localMongoUrl + userId);
        console.log(requests);
        return requests;
    };
    UserDashboardService.prototype.getRecommendations = function (username) {
        console.log(username);
        var recommendations = this.http.get(this.recommendationsUrl + username);
        return recommendations;
    };
    UserDashboardService.prototype.getPolicies = function (username) {
        console.log(username);
        var policies = this.http.get(this.policiesUrl);
        return policies;
    };
    UserDashboardService.prototype.getProfile = function (username) {
        console.log('service' + username);
        var profile = this.http.get(this.profileUrl + username);
        console.log('after');
        console.log(profile);
        return profile;
    };
    UserDashboardService.prototype.updateProfile = function (username, form) {
        console.log('service' + username);
        var profile = this.http.put(this.profileUrl + username, form);
        console.log('after');
        return profile;
    };
    UserDashboardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserDashboardService);
    return UserDashboardService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'http://13.126.73.190:8080/api/test/user';
        // private pmUrl = 'http://localhost:8080/api/test/pm';
        this.adminUrl = 'http://13.126.73.190:8080/api/test/admin';
    }
    UserService.prototype.getUserBoard = function () {
        return this.http.get(this.userUrl, { responseType: 'text' });
    };
    // getPMBoard(): Observable<string> {
    //   return this.http.get(this.pmUrl, { responseType: 'text' });
    // }
    UserService.prototype.getAdminBoard = function () {
        return this.http.get(this.adminUrl, { responseType: 'text' });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/user/Documents/v1.0.1/boeing-wave3-pie/landing_page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
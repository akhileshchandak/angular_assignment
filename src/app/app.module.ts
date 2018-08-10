import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule,
  MatTableModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatBadgeModule,
  MatCardModule,
  MatIconRegistry,
  MatIconModule,
  MatStepperModule,
  MatAutocompleteModule} from '@angular/material';


import { BrowserAnimationsModule,
        NoopAnimationsModule } from '@angular/platform-browser/animations';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';




import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { UsersComponent } from './users/users.component';
import { HolidayComponent } from './holiday/holiday.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatStepperModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  declarations: [
    AppComponent,
   
    P404Component,
    P500Component,
    LoginComponent,
    UsersComponent,
    HolidayComponent,
    DashboardComponent,
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

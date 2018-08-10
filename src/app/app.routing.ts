import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers


import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { UsersComponent } from './users/users.component';
import { HolidayComponent } from './holiday/holiday.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
 
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    data: {
        title: 'Dashboard'
    }
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'User Page'
    }
  },
  {
    path: 'holiday',
    component: HolidayComponent,
    data: {
      title: 'Holiday Package'
    }
  }
  
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

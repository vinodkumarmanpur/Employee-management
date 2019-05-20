import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {EmployeeService} from './employees/employee.service';
import {EmployeeFilterPipe} from './employees/employee-filter.pipe';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import {SelectRequiredValidatorDirective} from './shared/select-required-validator.directive';
import {ConfirmEqualValidatorDirective} from './shared/confirm-equal-validator.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
// import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-guard.service';
import { HomeComponent } from './employees/home.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee/insert-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
// import { Pipe, PipeTransform } from '@angular/core';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent},
  { path: 'insert', component: InsertEmployeeComponent},
  { path: 'get', component: GetEmployeeComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    HomeComponent,
    EmployeeFilterPipe,
    InsertEmployeeComponent,
    GetEmployeeComponent,
    SignupComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

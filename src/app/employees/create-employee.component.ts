import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  previewPhoto: boolean;
  datepickerConfig: Partial <BsDatepickerConfig>;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  departments: Department [] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'}
  ];

  // constructor(private http: HttpClient , private router: Router ) {
  // }
  constructor(private employeeService: EmployeeService,
              private router: Router) {
    this.datepickerConfig = Object.assign({},
      {
      containerClass: 'theme-dark-blue',
      DateInputFormat: 'DD/MM/YY'});
   }
   togglePhotoPreview() {
     this.previewPhoto = !this.previewPhoto;
   }

  ngOnInit() {
  }
  saveEmployee(): void {
    this.employeeService.save(this.employee);
    this.router.navigate(['list']);

  // added below lines
    // saveEmployee(employee: Employee) {
    // this.http.post<Employee>('http://localhost:7462/employee/add', employee)
    // .subscribe( data => console.log(data));
    // this.router.navigate(['list']);

  }
}

import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';
import {EmployeeService} from './employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee [];
  searchTerm: string;
// tslint:disable-next-line: variable-name
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployee();

  }
}

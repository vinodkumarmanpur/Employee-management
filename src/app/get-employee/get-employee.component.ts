import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})
export class GetEmployeeComponent implements OnInit {

  private employees: Employee[];
    constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEmployee();
  }

  public getEmployee(){
this.http.get<Employee[]>('http://localhost:8080/employee/all').subscribe(data => this.employees = data);
  }

}

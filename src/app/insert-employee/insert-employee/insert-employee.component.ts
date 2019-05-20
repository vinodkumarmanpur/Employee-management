import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
 employee: Employee;
  ngOnInit() {
  }

 public insertEmployee(employee: Employee) {

    this.http.post<Employee>('http://localhost:8080/employee/add', employee)
    .subscribe( data => console.log(data));
    this.router.navigate(['get']);

  }
}

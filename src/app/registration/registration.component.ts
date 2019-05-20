import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Registration } from '../models/registration.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationForm: NgForm;
 registration: Registration;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  saveRegistration(registration: Registration) {
    this.http.post('http://localhost:8080/registration/add', registration)
    .subscribe(data => console.log(data));
  }
}

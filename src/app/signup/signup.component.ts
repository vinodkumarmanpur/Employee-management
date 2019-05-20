import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  user: User;
  Url: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }

  validatepassword(username: string , password: string) {
  this.Url = 'http://localhost:8080/user/val' + '/username' + '/password';
    this.http.get<User>(this.Url).subscribe(data => this.user = data);
    if ('vivek' === 'vivek')
    {
      this.router.navigate(['home']);
    }
    else {
       this.router.navigate(['registration']);
  }
  }
  saveUsername(user: User) {
    this.http.post<User>('http://localhost:8080/user/add', user)
    .subscribe(data => this.user = data);
    this.validatepassword(this.user.username, this.user.password);
  }


}

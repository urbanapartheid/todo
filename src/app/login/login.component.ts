import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = 'eric';
  password: string = '';
  errorMessage: string = 'invalid Credential';
  invalidLogin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if (this.username === 'eric' && this.password === 'dummy') {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}

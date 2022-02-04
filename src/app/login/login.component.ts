import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

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

  constructor(private router: Router, private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  handleBasicAuthLogin(): void {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        }, error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
  }
}

import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})
export class AuthViewComponent implements OnInit {

  errMsg: string;

  username: string;
  password: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitAuthForm() {
    this.authService
      .signIn(this.username, this.password)
      .then(() => this.router.navigateByUrl('home'))
      .catch((errMsg: string) => this.errMsg = errMsg);
  }

}

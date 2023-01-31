import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    console.log('All good');
  }

  public onSubmit(): void {
    this.authService.login(this.loginForm.value)
      .then(() => this.router.navigate([ '/home' ]))
      .catch(err => alert(err));
  }

  public onClick(): void {
    this.authService.googleLogin()
      .then(res => this.router.navigate([ '/home' ]))
      .catch(err => alert(err));
  }
}

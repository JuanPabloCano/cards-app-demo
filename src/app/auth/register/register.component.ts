import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '@app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.registerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
    console.log('Working fine');
  }

  public onSubmit(): void {
    this.authService.register(this.registerForm.value)
      .then((user) => {
        if (user) {
          return this.router.navigate([ '/login' ]);
        }
        return false;
      })
      .catch(err => alert(err.message));
  }
}

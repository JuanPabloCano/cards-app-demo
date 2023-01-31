import { Component } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  public user$: Observable<any> = this.authService.auth.user;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
  }

  public logout(): void {
    this.authService.logout()
      .then(() => this.router.navigate([ '/login' ]))
      .catch(err => console.error(err));
  }
}

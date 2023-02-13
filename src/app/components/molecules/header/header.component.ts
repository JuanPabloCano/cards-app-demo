import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/modules/services/auth.service';
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

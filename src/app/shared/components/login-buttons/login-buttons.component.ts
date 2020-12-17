import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent {

  constructor(
    public auth: AuthenticationService,
    private router: Router
  ) {}

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}

import { Component } from '@angular/core';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent {

  constructor(private auth: AuthenticationService) {}

  onLogout(): void {
    const userName = this.auth.getUserInfo()?.email;
    this.auth.logout();
    userName ? console.log(`Logout ${userName}`) : console.error('User wasn\'n Logged In');
  }
}

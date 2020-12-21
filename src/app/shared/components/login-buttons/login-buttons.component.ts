import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit {
  userName: string;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userName = this.auth.getUserInfo()?.name?.first + " " + this.auth.getUserInfo()?.name?.last;
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}

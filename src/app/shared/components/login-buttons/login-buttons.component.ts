import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss']
})
export class LoginButtonsComponent implements OnInit, OnDestroy {
  userName: string;

  private sub: Subscription;

  constructor(
    private auth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = {token: this.auth.getLocalStorageData()?.token}
    this.sub = this.auth.getUserInfo(token).subscribe(
      userData => this.userName = userData?.name?.first + ' ' + userData?.name?.last,
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onLogout(): void {
    this.auth.logout();
    this.router.navigate(['login']);
  }
}

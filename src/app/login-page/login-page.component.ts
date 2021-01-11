import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subject } from 'rxjs';

import { Store } from '@ngrx/store';
import * as AuthActions from '@app/core/@ngrx/authentication/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  private unsubscribe: Subject<void> = new Subject();
  
  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onSubmit(): void {
    const userData = {
      login: this.login.value,
      password: this.password.value
    }

    this.store.dispatch(AuthActions.login({ userData }));
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      login: ['', {validators: [Validators.required], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required]}],
    });
  }
}

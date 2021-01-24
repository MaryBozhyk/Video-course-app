import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginUser } from '@app/models';

import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as AuthActions from '@app/core/@ngrx/authentication/auth.actions';
import { selectIsLoggedError } from '@app/core/@ngrx/authentication';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  validationMessage: LoginUser = {
    login: '',
    password: ''
  };

  loginError$: Observable<Error | string>;

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  private validationMessagesMap = {
    login: {
      required: this.translateService.instant('PAGES.LOGIN_PAGE.LOGIN_REQUIRED_MESSAGE')
    },
    password: {
      required: this.translateService.instant('PAGES.LOGIN_PAGE.PASSWORD_REQUIRED_MESSAGE'),      
      minlength: this.translateService.instant('PAGES.LOGIN_PAGE.PASSWORD_MIN_LENGTH_MESSAGE')
    }
  };
  
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.loginError$ = this.store.pipe(select(selectIsLoggedError));
  }

  onBlur(event: FocusEvent) {
    if ((event.target as Element).id === 'login') {
      this.setValidationMessage(this.login, 'login');
    } else if ((event.target as Element).id === 'password') {
      this.setValidationMessage(this.password, 'password');
    }
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
      password: ['', {validators: [Validators.required, Validators.minLength(4)]}],
    });
  }

  private setValidationMessage(c: AbstractControl, controlName: string) {
    for (const field in this.validationMessage) {
      if (!this[field].errors) {
        this.validationMessage[field] = '';
      }
    }

    if ((c.touched || c.dirty) && c.errors) {
      this.validationMessage[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ');
    }
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page.component';
import { HeaderModule } from '@app/shared/components/header';

import { MockBuilder } from 'ng-mocks';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await MockBuilder(LoginPageComponent).mock(HeaderModule).keep(ReactiveFormsModule);
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

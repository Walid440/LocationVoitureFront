import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthForgotPasswordV2Component } from './auth-forgot-password-v2/auth-forgot-password-v2.component';
import { AuthLoginV2Component } from './auth-login-v2/auth-login-v2.component';
import { AuthRegisterV2Component } from './auth-register-v2/auth-register-v2.component';
import { AuthResetPasswordV2Component } from './auth-reset-password-v2/auth-reset-password-v2.component';

 
// routing
const routes: Routes = [

  {
    path: 'authentication/login-v2',
    component: AuthLoginV2Component
  },
  {
    path: 'authentication/register-v2',
    component: AuthRegisterV2Component
  },
  
  {
    path: 'authentication/reset-password-v2',
    component: AuthResetPasswordV2Component
  },
  {
    path: 'authentication/forgot-password-v2',
    component: AuthForgotPasswordV2Component
  }
];

@NgModule({
  declarations: [
  
  ],
  imports: [CommonModule,NgbModule]
})
export class AuthenticationModule {}

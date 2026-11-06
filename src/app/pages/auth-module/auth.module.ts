
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { loginComponent } from './login/login.component';
import { signupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth.routing-module';
import { ResumeArrayFormComponent } from './resumeArrayForm/resumeArrayForm.component';

@NgModule({
  declarations: [
    ResumeArrayFormComponent,
    loginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    signupComponent
  ],
  providers: []
})
export class AuthModule {
  constructor() {
    console.log('object created : AuthModule');
  }
}

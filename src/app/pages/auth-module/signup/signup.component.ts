
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class signupComponent {

  // =========================
  // WAY 1
  // =========================

  public firstName: string = 'Muskan';
  public lastName: string = 'Chouhan';
  public email: string = 'muskan@g.com';
  public mobileNumber: string = '9513244678';
  public passwordValue: string = 'Muskan@1444';
  public reTypePassword: string = 'Muskan@1444';

  public submitWay1(): void {
    console.log('Submit Way-1');

    const signupRequestViewWay1 = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      mobileNumber: this.mobileNumber,
      password: this.passwordValue,
      reTypePassword: this.reTypePassword
    };

    console.log('Way-1 Signup Data:', signupRequestViewWay1);
  }

  // =========================
  // WAY 2
  // =========================

  public signupRequestViewWay2 = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    reTypePassword: ''
  };

  public submitWay2(): void {
    console.log('Submit Way-2');
    console.log(this.signupRequestViewWay2);

    if (
      this.signupRequestViewWay2.password !==
      this.signupRequestViewWay2.reTypePassword
    ) {
      console.log('Password and Re-Type Password do not match');
      return;
    }

    console.log('Way-2 Signup Successful');
  }

  // =========================
  // WAY 3
  // TEMPLATE-DRIVEN FORM
  // =========================

  public signupRequestViewWay3 = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    reTypePassword: ''
  };

  public submitWay3(signupForm: NgForm): void {
    console.log('Submit Way-3');
    console.log('Form Valid:', signupForm.valid);
    console.log('Form Value:', signupForm.value);
    console.log('Signup Data:', this.signupRequestViewWay3);

    if (signupForm.invalid) {
      signupForm.control.markAllAsTouched();
      console.log('Please enter valid details');
      return;
    }

    if (
      this.signupRequestViewWay3.password !==
      this.signupRequestViewWay3.reTypePassword
    ) {
      console.log('Password and Re-Type Password do not match');
      return;
    }

    console.log('Way-3 Signup Successful');
  }

  // =========================
  // WAY 4
  // REACTIVE FORM
  // =========================

  public signupReactiveFormGroup2: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
      )
    ]),

    retypePassword: new FormControl('', [
      Validators.required
    ])
  });

  // Password control getter
  get passwordControl(): FormControl {
    return this.signupReactiveFormGroup2.get('password') as FormControl;
  }

  // Retype password control getter
  get retypePasswordControl(): FormControl {
    return this.signupReactiveFormGroup2.get('retypePassword') as FormControl;
  }

  // Minimum length validation
  get hasMinLength(): boolean {
    return (this.passwordControl.value ?? '').length >= 8;
  }

  // Number validation
  get hasNumber(): boolean {
    return /\d/.test(this.passwordControl.value ?? '');
  }

  // Uppercase validation
  get hasUppercase(): boolean {
    return /[A-Z]/.test(this.passwordControl.value ?? '');
  }

  // Lowercase validation
  get hasLowercase(): boolean {
    return /[a-z]/.test(this.passwordControl.value ?? '');
  }

  // Special character validation
  get hasSpecialChar(): boolean {
    return /[@$!%*?&]/.test(this.passwordControl.value ?? '');
  }

  // Password matching validation
  get passwordsMatch(): boolean {
    const password = this.passwordControl.value;
    const retypePassword = this.retypePasswordControl.value;

    return (
      retypePassword !== '' &&
      password === retypePassword
    );
  }

  // Submit Way-4
  public submitway4(): void {
    this.signupReactiveFormGroup2.markAllAsTouched();

    if (
      this.signupReactiveFormGroup2.valid &&
      this.passwordsMatch
    ) {
      console.log('Way-4 Signup Successful');
      console.log(
        'Signup Data:',
        this.signupReactiveFormGroup2.value
      );
    } else {
      console.log('Form is invalid');

      if (!this.passwordsMatch) {
        console.log('Password and Re-Type Password do not match');
      }

      console.log(
        'Validation Errors:',
        this.signupReactiveFormGroup2.errors
      );
    }
  }
}

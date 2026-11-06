import { Component } from "@angular/core";  
import { Router, RouterLink } from "@angular/router";
import{FormGroup, FormControl, Validators , ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: "app-my-account",
  templateUrl: "./my-account.component.html",
  styleUrl: "./my-account.component.scss",
  standalone: true,
   imports: [  RouterLink,
  ReactiveFormsModule,
   CommonModule,
   MatFormFieldModule, MatInputModule, MatIconModule

]
})
export class myAccountComponent{
      hidePassword = true; 

    public signupReactiveFormGroup2:FormGroup= new FormGroup({
        firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,12}$")]),
        retypePassword: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,12}$") ])
    }); 

      Form!: FormGroup; 
    
       
     public submitway4(){
        console.log("submit way4 called");
        console.log(this.signupReactiveFormGroup2.valid);
        console.log(this.signupReactiveFormGroup2.value);
    }
    
  signupForm = new FormGroup({

    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/)
    ]),

    confirmPassword: new FormControl('', [
      Validators.required
    ])

  });

  get password() {
    return this.signupReactiveFormGroup2.get('password')!;
  }

  get confirmPassword() {
    return this.signupReactiveFormGroup2.get('confirmPassword')!;
  }

  // At least 8 characters
// At least 8 characters
get hasMinLength(): boolean {
  return (this.password.value?.length ?? 0) >= 8;
}

  // At least one number
  get hasNumber(): boolean {
    return /\d/.test(this.password.value || '');
  }

  // At least one capital letter
  get hasUppercase(): boolean {
    return /[A-Z]/.test(this.password.value || '');
  }

  // At least one small letter
  get hasLowercase(): boolean {
    return /[a-z]/.test(this.password.value || '');
  }

  // At least one special character
  get hasSpecialChar(): boolean {
    return /[@$!%*?&]/.test(this.password.value || '');
  }

  // Confirm password
  get passwordsMatch(): boolean {
    return (
      this.password.value === this.confirmPassword.value &&
      this.confirmPassword.value !== ''
    );
  }

  onSubmit() {

    if (this.signupReactiveFormGroup2.valid && this.passwordsMatch) {
      console.log(this.signupReactiveFormGroup2.value);
    } else {
      this.signupReactiveFormGroup2.markAllAsTouched();
    }

  }
}




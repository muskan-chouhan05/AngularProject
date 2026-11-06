import { Component } from "@angular/core";  
import { RouterLink } from "@angular/router";
import{FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    
    templateUrl: "./login.component.html",
    styleUrl:"./login.component.scss",
    standalone : false
})
export class loginComponent{
    public signupReactiveFormGroup :FormGroup= new FormGroup({
        firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,8}$")]),
        retypePassword: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,8}$") ])
    });

    public signupReactiveFormGroup2:FormGroup= new FormGroup({
        firstName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        lastName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,8}$")]),
        retypePassword: new FormControl("", [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,8}$") ])
    }); 
    // constructor() {
    //     console.log("object created : login Component");
    // }
      Form!: FormGroup; 

     public submitway4(){
        console.log("submit way4 called");
        console.log(this.signupReactiveFormGroup2.valid);
        console.log(this.signupReactiveFormGroup2.value);
    }
}

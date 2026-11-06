import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { signupComponent } from "./signup/signup.component";
import { loginComponent } from "./login/login.component";
import { ResumeArrayFormComponent } from "./resumeArrayForm/resumeArrayForm.component";

const routes: Routes = [

  {
    path: "signup",
    component: signupComponent
  },

  {
    path: "login",
    component: loginComponent
  },
  {
        path: 'resume-builder',
        component: ResumeArrayFormComponent
    }
];


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AuthRoutingModule {

  constructor() {
    console.log("object created : AuthRoutingModule");
  }

}
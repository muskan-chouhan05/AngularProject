import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: "./resumeArrayForm.component.html",
    styleUrl: './resumeArrayForm.component.scss',
    standalone: false,
})


export class ResumeArrayFormComponent {
    public resumeForm: FormGroup;

    constructor(private fb: FormBuilder) {
        console.info("object created : ResumeArrayFormComponent");
        this.resumeForm = new FormGroup({
            first_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
            last_name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
            email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")]),
            mobile_number: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{10}$")]),
            dob: new FormControl("", [Validators.required]),
            skills: new FormArray([
                this.fb.group({
                    title: ['', Validators.required],
                    level: ['beginner', Validators.required]
                })
            ]),
            Educations: new FormArray([
                this.fb.group({
                    specifications: [''],
                    title: ['10th', Validators.required],
                    percentage: ['0', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])]
                })
            ]),
        });
    }
    form!: any;

    public resumeFormMethod() {
        console.log("signup Reactive Form Group value ");
        console.log(this.resumeForm.value);
        console.log(this.resumeForm.valid);
    }

    addEducation() {
        const educationForm = this.fb.group({
            specifications: [''],
            title: ['', Validators.required],
            percentage: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(100)])]
        });
        this.Educations.push(educationForm);
    }

    addSkill() {
        const skillForm = this.fb.group({
            title: ['', Validators.required],
            level: ['beginner', Validators.required]
        });
        this.skills.push(skillForm);
    }
    get skills(): FormArray {
        return this.resumeForm.get('skills') as FormArray;
    }

    get Educations(): FormArray {
        return this.resumeForm.get('Educations') as FormArray;
    }


    removeEducation(i: number) {
        this.Educations.removeAt(i);
    }
    removeSkill(i: number) {
        this.skills.removeAt(i);
    }



}
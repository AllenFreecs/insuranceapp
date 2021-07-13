import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createLoginFormGroup(formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({
     
        userName:['', Validators.required],
        passWord: ['', (Validators.required)],
    });

}
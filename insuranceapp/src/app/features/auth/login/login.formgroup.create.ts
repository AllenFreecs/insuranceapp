import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export function createLoginFormGroup(formBuilder: FormBuilder): FormGroup {

    return formBuilder.group({
     
        userName:['SA', Validators.required],
        passWord: ['Allen@123', (Validators.required)],
    });

}
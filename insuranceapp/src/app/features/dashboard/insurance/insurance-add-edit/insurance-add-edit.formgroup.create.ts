import { formatDate } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InsuranceInfoDTO, InsurancePageRequest } from "src/app/api/models";

export function createInsuranceFormGroup(formBuilder: FormBuilder,model: InsuranceInfoDTO): FormGroup {

    return formBuilder.group({
        firstName:[model.FirstName, Validators.required],
        middleName:[model.MiddleName, Validators.required],
        lastName:[model.LastName, Validators.required],
        basicSalary:[model.BasicSalary == 0 ? null : model.BasicSalary, Validators.required],
        birthDate:[formatDate(model.BirthDate, 'yyyy-MM-dd', 'en'), Validators.required]
    });

}
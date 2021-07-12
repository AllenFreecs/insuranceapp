import { FormBuilder, FormGroup } from "@angular/forms";
import { InsuranceInfoDTO, InsurancePageRequest } from "src/app/api/models";

export function createInsuranceFilterFormGroup(formBuilder: FormBuilder,model: InsurancePageRequest): FormGroup {

    return formBuilder.group({
        firstName:[model.FirstName],
        middleName:[model.MiddleName],
        lastName:[model.LastName],
        basicSalaryStart:[model.BasicSalaryStart],
        basicSalaryEnd:[model.BasicSalaryEnd],
        startDate:[model.StartDate],
        endDate:[model.EndDate]
    });

}

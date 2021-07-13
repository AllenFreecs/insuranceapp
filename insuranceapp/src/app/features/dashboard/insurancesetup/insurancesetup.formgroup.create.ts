import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SetupDTO } from "src/app/api/models";

export function createInsuranceSetupFormGroup(formBuilder: FormBuilder,model: SetupDTO): FormGroup {

    return formBuilder.group({
        ID:[model.Id],
        guaranteedIssue:[model.GuaranteedIssue , [Validators.required, Validators.min(1), Validators.max(9999999)]],
        minAgeLimit:[model.MinAgeLimit , [Validators.required, Validators.min(1), Validators.max(model.MaxAgeLimit ? model.MaxAgeLimit : 1)]],
        maxAgeLimit:[model.MaxAgeLimit , [Validators.required, Validators.min(model.MinAgeLimit ? model.MinAgeLimit : 1), Validators.max(150)]],
        maximumRange:[model.MaximumRange , [Validators.required, Validators.min(model.MinimumRange ? model.MinimumRange : 1), Validators.max(150)]],
        minimumRange:[model.MinimumRange , [Validators.required, Validators.min(1), Validators.max(model.MaximumRange ? model.MaximumRange : 1)]],
        increments:[model.Increments , [Validators.required, Validators.min(model.MinimumRange? model.MinimumRange : 1), Validators.max(model.MaximumRange ? model.MaximumRange - 1 : 1 )]],
    });

}
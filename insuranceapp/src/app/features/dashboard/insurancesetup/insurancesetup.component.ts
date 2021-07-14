import { getLocaleMonthNames } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupDTO } from 'src/app/api/models';
import { SetupService } from 'src/app/api/services';
import { createInsuranceSetupFormGroup } from './insurancesetup.formgroup.create';

@Component({
  selector: 'app-insurancesetup',
  templateUrl: './insurancesetup.component.html',
  styleUrls: ['./insurancesetup.component.css']
})
export class InsurancesetupComponent implements OnInit {
  disabled!: boolean;
  insuranceSetup!: SetupDTO; 
  insuranceSetupFormGroup!: FormGroup;
  constructor(private insuranceSetupService: SetupService, private cd: ChangeDetectorRef, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadSetup();
  }
  loadSetup() {
    this.insuranceSetupService.GetSetupData(1).subscribe( data => {
        this.insuranceSetup = data;
        this.insuranceSetupFormGroup = createInsuranceSetupFormGroup(this.formBuilder,data);
        this.disabled = false;
        this.cd.detectChanges();
      },
      ((error: HttpErrorResponse) => {
        this.disabled = false;
        alert(error);
        this.cd.detectChanges();
      })); 
  }
  saveSetup(){
  this.insuranceSetupFormGroup.markAsDirty();
  if(this.insuranceSetupFormGroup.valid) {
  this.disabled = true;
    const saverequest: SetupDTO = {
      Id: 1,
      GuaranteedIssue: this.insuranceSetupFormGroup.get('guaranteedIssue')?.value,
      MinAgeLimit: this.insuranceSetupFormGroup.get('minAgeLimit')?.value,
      MaxAgeLimit: this.insuranceSetupFormGroup.get('maxAgeLimit')?.value,
      MinimumRange: this.insuranceSetupFormGroup.get('minimumRange')?.value,
      MaximumRange: this.insuranceSetupFormGroup.get('maximumRange')?.value,
      Increments: this.insuranceSetupFormGroup.get('increments')?.value,
    }
   this.insuranceSetupService.SaveSetupData(saverequest).subscribe( data => {
      alert(data.Message);
      this.insuranceSetupFormGroup.markAsPristine();
      this.disabled = false;
      this.cd.detectChanges();
    },
    ((error: HttpErrorResponse) => {
      this.disabled = false;
      alert(error);
      this.cd.detectChanges();
    })); 
  }
  }
  updaterange() {
    const max = this.insuranceSetupFormGroup.get('maximumRange')?.value;
    const min = this.insuranceSetupFormGroup.get('minimumRange')?.value;
    if(!isNaN(max) && !isNaN(min) ) {
      this.insuranceSetupFormGroup.get('maximumRange')?.setValidators(Validators.min(min));
      this.insuranceSetupFormGroup.get('minimumRange')?.setValidators(Validators.max(max));
    }
  }
  updateagerange() {
    const max = this.insuranceSetupFormGroup.get('maxAgeLimit')?.value;
    const min = this.insuranceSetupFormGroup.get('minAgeLimit')?.value;
    if(!isNaN(max) && !isNaN(min) ) {
      this.insuranceSetupFormGroup.get('maxAgeLimit')?.setValidators(Validators.min(min));
      this.insuranceSetupFormGroup.get('minAgeLimit')?.setValidators(Validators.max(max));
    }
  
    }
  checkInput(event: any) {
    if (event.which < 48 || event.which > 57)
    {
      event.preventDefault();
    }
  }



}

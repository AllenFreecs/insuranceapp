import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GlobalResponseDTO, InsuranceInfoDetailDTO, InsuranceInfoDTO } from 'src/app/api/models';
import { InsuranceService } from 'src/app/api/services';
import { createInsuranceFormGroup } from './insurance-add-edit.formgroup.create';

@Component({
  selector: 'app-insurance-add-edit',
  templateUrl: './insurance-add-edit.component.html',
  styleUrls: ['./insurance-add-edit.component.css']
})
export class InsuranceAddEditComponent implements OnInit {
  id!: number;
  insuranceFormGroup!: FormGroup ;
  insuranceInfoDTO!: InsuranceInfoDTO;
  insuranceInfoDetailDTO!: any;
  constructor(private route:ActivatedRoute, private formBuilder: FormBuilder, private cd: ChangeDetectorRef,private insuranceService:InsuranceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
   });
   if(isNaN(this.id)) {
    this.initiateBlankForm();
   } else {
    this.loadInsurance();
   }
  }
  initiateBlankForm() {
    const blankForm : InsuranceInfoDTO = {
      ID:  0,
      LastName: '',
      FirstName: '',
      MiddleName: '',
      BirthDate: new Date().toString(),
      BasicSalary: 0,
    }
    this.insuranceFormGroup = createInsuranceFormGroup(this.formBuilder,blankForm)
  }
  loadInsurance() {
    if(this.id) {
      this.insuranceService.GetInsuranceData(this.id).subscribe((data:InsuranceInfoDTO) => {
        this.insuranceFormGroup = createInsuranceFormGroup(this.formBuilder,data)
        this.insuranceInfoDetailDTO = data?.InsuranceInfoDetail;
      },
      ((error: HttpErrorResponse) => {
        alert(error);
        this.cd.detectChanges();
      }));    
    }

  }
  save() {
    const model: InsuranceInfoDTO = {
      ID: !isNaN(this.id) ? this.id : 0,
      LastName: this.insuranceFormGroup.get('lastName')?.value,
      FirstName: this.insuranceFormGroup.get('firstName')?.value,
      MiddleName: this.insuranceFormGroup.get('middleName')?.value,
      BirthDate: this.insuranceFormGroup.get('birthDate')?.value,
      BasicSalary: this.insuranceFormGroup.get('basicSalary')?.value,
    }
    console.log(model);
    this.insuranceService.SaveInsuranceData(model).subscribe((data: GlobalResponseDTO) => {
    window.location.href = "dashboard/insurance/" + data.ID;
    },
    ((error: HttpErrorResponse) => {
      alert(error);
      this.cd.detectChanges();
    }));    

  }

}

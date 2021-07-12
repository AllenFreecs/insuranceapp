import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InsuranceCountRequest, InsuranceInfoDTO, InsurancePageRequest } from 'src/app/api/models';
import { InsuranceService } from 'src/app/api/services';
import { PagerComponent } from 'src/app/shared/pager/pager.component';
import { createInsuranceFilterFormGroup } from './insurance.formgroup.create';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insuranceInfoList!: InsuranceInfoDTO[];
  insuranceInfoFilterFormGroup!: FormGroup;
  pageSize:number= 10;
  pageCount!:number;
  disabled!: boolean;
  recordCount!: number;

  @ViewChild(PagerComponent)
  pager!: PagerComponent;

  constructor(private insuranceService: InsuranceService, private cd: ChangeDetectorRef, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   this.initiateBlankForm();
  }
  getPageSize(recordcount:number):number {
    let ans = recordcount/this.pageSize;
    const num =+ ans.toFixed(1);
    return Math.ceil(num);
  }
  initiateBlankForm() {
    const initial: InsurancePageRequest = {
      Page: 1,
      Pagesize: this.pageSize ,
      FirstName: '',
      MiddleName: '',
      LastName: '',
      StartDate: '',
      EndDate: '',
      BasicSalaryStart: undefined,
      BasicSalaryEnd: undefined,
    }
    this.insuranceInfoFilterFormGroup = createInsuranceFilterFormGroup(this.formBuilder,initial);

    const countrequest: InsuranceCountRequest = {
      FirstName: '',
      MiddleName: '',
      LastName: '',
      StartDate: '',
      EndDate: '',
      BasicSalaryStart: undefined,
      BasicSalaryEnd: undefined,
    }
     
    this.insuranceService.GetInsuranceCount(countrequest).subscribe( data => {
      this.pageCount = this.getPageSize(data);
      this.recordCount = data;
      this.loadInsurance(initial);
      this.cd.detectChanges();
    },
    ((error: HttpErrorResponse) => {
      alert(error);
      this.cd.detectChanges();
    })); 
   
  }
  loadInsurance(request: InsurancePageRequest){
    this.disabled = true;
    this.insuranceInfoFilterFormGroup = createInsuranceFilterFormGroup(this.formBuilder,request)
    
    this.insuranceService.GetInsuranceList(request).subscribe( data => {
        this.insuranceInfoList = data;
        this.disabled = false;
        this.cd.detectChanges();
      },
      ((error: HttpErrorResponse) => {
        this.disabled = false;
        alert(error);
        this.cd.detectChanges();
      })); 
  }
  apply(){
    this.disabled = true;
    const countrequest: InsuranceCountRequest = {
      FirstName: this.insuranceInfoFilterFormGroup.get('firstName')?.value,
      MiddleName: this.insuranceInfoFilterFormGroup.get('middleName')?.value,
      LastName: this.insuranceInfoFilterFormGroup.get('lastName')?.value,
      StartDate: this.insuranceInfoFilterFormGroup.get('startDate')?.value,
      EndDate: this.insuranceInfoFilterFormGroup.get('endDate')?.value,
      BasicSalaryStart: this.insuranceInfoFilterFormGroup.get('basicSalaryStart')?.value,
      BasicSalaryEnd: this.insuranceInfoFilterFormGroup.get('basicSalaryEnd')?.value,
    }

    const request: InsurancePageRequest = {
      Page: 1,
      Pagesize: this.pageSize ,
      FirstName: this.insuranceInfoFilterFormGroup.get('firstName')?.value,
      MiddleName: this.insuranceInfoFilterFormGroup.get('middleName')?.value,
      LastName: this.insuranceInfoFilterFormGroup.get('lastName')?.value,
      StartDate: this.insuranceInfoFilterFormGroup.get('startDate')?.value,
      EndDate: this.insuranceInfoFilterFormGroup.get('endDate')?.value,
      BasicSalaryStart: this.insuranceInfoFilterFormGroup.get('basicSalaryStart')?.value,
      BasicSalaryEnd: this.insuranceInfoFilterFormGroup.get('basicSalaryEnd')?.value,
    }

    this.insuranceService.GetInsuranceCount(countrequest).subscribe( data => {
      this.pageCount = this.getPageSize(data);
      this.recordCount = data;
      this.loadInsurance(request);
      this.disabled = false;
      this.cd.detectChanges();
    },
    ((error: HttpErrorResponse) => {
      alert(error);
      this.cd.detectChanges();
    })); 
   
  }
  Navigate(page:number) {
    const request: InsurancePageRequest = {
      Page: page,
      Pagesize: this.pageSize ,
      FirstName: this.insuranceInfoFilterFormGroup.get('firstName')?.value,
      MiddleName: this.insuranceInfoFilterFormGroup.get('middleName')?.value,
      LastName: this.insuranceInfoFilterFormGroup.get('lastName')?.value,
      StartDate: this.insuranceInfoFilterFormGroup.get('startDate')?.value,
      EndDate: this.insuranceInfoFilterFormGroup.get('endDate')?.value,
      BasicSalaryStart: this.insuranceInfoFilterFormGroup.get('basicSalaryStart')?.value,
      BasicSalaryEnd: this.insuranceInfoFilterFormGroup.get('basicSalaryEnd')?.value,
    }
     this.loadInsurance(request);
  }
  edit(id: any){
    window.open('dashboard/insurance/' + id)
  }
  delete(id: any , row: any){
    this.pager.currentPage = 1;
    // const app  = document.getElementById(row);
    // app?.remove();
    // this.recordCount = this.recordCount -1;
    this.insuranceService.DeleteInsuranceData([id]).subscribe( data => {
      // this.pageCount = this.getPageSize(data);
      // this.recordCount = data;
      this.apply();
      this.cd.detectChanges();
    },
    ((error: HttpErrorResponse) => {
      alert(error);
      this.cd.detectChanges();
    })); 
    
 

  }
  add(){
    window.open('dashboard/insurance/Add');
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GlobalResponseDTO } from 'src/app/api/models';
import { AuthService } from 'src/app/api/services';
import { createLoginFormGroup } from './login.formgroup.create';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginFormGroup!: FormGroup ;
  constructor(private formBuilder: FormBuilder, private authservice: AuthService, private cd: ChangeDetectorRef,) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
   this.loginFormGroup = createLoginFormGroup(this.formBuilder);
  }
  login(): void {    
    const userName: string = this.loginFormGroup.get('userName')?.value;
    const passWord: string = this.loginFormGroup.get('passWord')?.value;
    
    if(this.loginFormGroup.valid) {
      this.authservice.Authenticate({UserName: userName, Password: passWord }).subscribe( (data: GlobalResponseDTO) => {   
        if(data.IsSuccess){
          window.location.href = "/dashboard/insurance"
        } else {
          this.loginFormGroup.controls['passWord'].setErrors({'custom': data.Message});
        }
        this.cd.detectChanges();
      },
      ((error: HttpErrorResponse) => {
        alert(error);
        this.cd.detectChanges();
      }));    
    }

    
  }
   

  

}


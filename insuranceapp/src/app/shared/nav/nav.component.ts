import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authservice: AuthService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  signout(){
    this.authservice.Logout().subscribe(data => {
      window.location.href='login';
    },
    ((error: HttpErrorResponse) => {
      alert(error);
      this.cd.detectChanges();
    }));    
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval, timer } from 'rxjs';
import { mergeMap, takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/api/services';

@Component({
  selector: 'app-heartbeat',
  templateUrl: './heartbeat.component.html',
  styleUrls: ['./heartbeat.component.css']
})
export class HeartbeatComponent implements OnInit {

  constructor(private authservice: AuthService) { 
  }  
  ngOnInit(): void {
    const reloadInterval = 8000;
    timer(0, reloadInterval).pipe(
      mergeMap(async (_) => this.heartbeat())
    ).subscribe()
  }
  heartbeat(){
    this.authservice.HeartBeat().subscribe( (response:any) => {  
    },
    ((error: HttpErrorResponse) => {
    }));    
  }
  }


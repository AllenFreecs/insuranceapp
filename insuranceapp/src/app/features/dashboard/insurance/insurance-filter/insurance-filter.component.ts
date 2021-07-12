import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-filter',
  templateUrl: './insurance-filter.component.html',
  styleUrls: ['./insurance-filter.component.css']
})
export class InsuranceFilterComponent implements OnInit {
  @Input() parent!: FormGroup;
  @Output() applyFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  apply(){
    this.applyFilter.emit(this.parent);
  }

}

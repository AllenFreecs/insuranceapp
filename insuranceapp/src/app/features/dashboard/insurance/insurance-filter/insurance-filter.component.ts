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
     if(this.parent.get('basicSalaryEnd')?.value < this.parent.get('basicSalaryStart')?.value)
     {
        return alert('Invalid Range.')
     }
     if(this.parent.get('endDate')?.value < this.parent.get('startDate')?.value)
     {
       return alert('Invalid Range.')
     }
     this.applyFilter.emit(this.parent);
  }
  checkInput(event: any) {
    if (event.which < 48 || event.which > 57)
    {
      event.preventDefault();
    }
  }

}

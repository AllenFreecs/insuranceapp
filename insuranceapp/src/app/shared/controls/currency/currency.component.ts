import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  @Input() inputText!: FormControl
  constructor() { }

  ngOnInit(): void {
  }
  format() {
    const data = this.inputText.value;
    data.replace(/[^\d.-]/g, '');

    this.inputText.setValue(data);

  }

}

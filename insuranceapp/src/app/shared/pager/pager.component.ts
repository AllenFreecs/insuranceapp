import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit,OnChanges {
  @Input() PageCount!:number;
  @Input() PageSize!:number;
  slides:number = 1; // default
  currentSlide:number = 1;
  displayedPages:number= 0;
  currentPage:number = 1;
  @Output() Navigate: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    if(this.PageCount < 18) {
      this.displayedPages = this.PageCount;
    } else {
      this.displayedPages = this.slides;
    }
  }
  go(page: number){
    this.currentPage = page;
    this.Navigate.emit(page);
  }
  previous(){
    if(this.currentSlide > this.slides) {
      this.currentSlide = this.currentSlide - this.slides;
      this.currentPage = this.currentSlide;
      this.Navigate.emit(this.currentPage);
    }
  }
  next(){
    if((this.currentSlide + this.slides) <= this.PageCount) {
      this.currentSlide = this.currentSlide + this.slides;
      this.currentPage = this.currentSlide;
      this.Navigate.emit(this.currentPage);
    }
  }
  counter(i: number) {
    return new Array(i);
  }
}

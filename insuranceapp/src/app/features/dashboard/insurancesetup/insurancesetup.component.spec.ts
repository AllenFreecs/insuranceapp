import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancesetupComponent } from './insurancesetup.component';

describe('InsurancesetupComponent', () => {
  let component: InsurancesetupComponent;
  let fixture: ComponentFixture<InsurancesetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancesetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

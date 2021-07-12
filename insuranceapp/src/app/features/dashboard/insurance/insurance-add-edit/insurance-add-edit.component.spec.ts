import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceAddEditComponent } from './insurance-add-edit.component';

describe('InsuranceAddEditComponent', () => {
  let component: InsuranceAddEditComponent;
  let fixture: ComponentFixture<InsuranceAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceAddEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

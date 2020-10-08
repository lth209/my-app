import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLopComponent } from './form-lop.component';

describe('FormLopComponent', () => {
  let component: FormLopComponent;
  let fixture: ComponentFixture<FormLopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

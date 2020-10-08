import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSVComponent } from './form-sv.component';

describe('FormSVComponent', () => {
  let component: FormSVComponent;
  let fixture: ComponentFixture<FormSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

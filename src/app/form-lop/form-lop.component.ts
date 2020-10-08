import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-lop',
  templateUrl: './form-lop.component.html',
  styleUrls: ['./form-lop.component.css']
})
export class FormLopComponent implements OnInit {
  lopForm: FormGroup;
  nameCtrl: FormControl;

  @Input() id: number;
  @Output() getData = new EventEmitter();
  constructor(private fb: FormBuilder) { 
    this.initForm();
  }
  initForm(){
    this.nameCtrl =  this.fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.lopForm = this.fb.group({
      name: this.nameCtrl
    });
  }
  onSubmit(){
    var res = {
      id: this.id,
      name: this.lopForm.controls.name.value,
    }
    this.getData.emit(res);
    this.nameCtrl.setValue('');
  }
  ngOnInit(): void {
  }

}

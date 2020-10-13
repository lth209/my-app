import { Component, OnChanges, OnInit, Input, Output, EventEmitter,
  SimpleChanges } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-lop',
  templateUrl: './form-lop.component.html',
  styleUrls: ['./form-lop.component.css']
})
export class FormLopComponent implements OnInit, OnChanges {
  lopForm: FormGroup;
  nameCtrl: FormControl;
  gvCtrl: FormControl;
  isUpdateLop: boolean;

  @Input() lop: any;
  @Input() isUpdate: boolean;
  @Output() getData = new EventEmitter();
  @Output() public closeBtn = new EventEmitter();

  constructor(private fb: FormBuilder) { 
    this.initForm();
    //this.isUpdateLop = this.isUpdate;  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.isUpdate != undefined)
    this.isUpdateLop = changes.isUpdate.currentValue;
    this.lopForm.reset();
    //Set older data to input
    this.nameCtrl.setValue(this.lop.name);
    this.gvCtrl.setValue(this.lop.gv);
  }
  initForm(){
    this.nameCtrl =  this.fb.control('', [Validators.required, Validators.maxLength(20)]);
    this.gvCtrl = this.fb.control('', [Validators.required, Validators.maxLength(50), Validators.minLength(6)]);
    //this.isUpdateLop = this.isUpdate;

    this.lopForm = this.fb.group({
      name: this.nameCtrl,
      gv: this.gvCtrl
    });
  }
  onSubmit(){
    var res;
    if (this.isUpdate){
      res = {
        id: this.lop.id,
        name: this.lopForm.controls.name.value,
        gv: this.lopForm.controls.gv.value
      }
    }
    else{
      res = {
        id: '',
        name: this.lopForm.controls.name.value,
        gv: this.lopForm.controls.gv.value
      }
    }
    
    this.getData.emit(res);
    this.lopForm.reset();
  }

  closeClick(){
    this.closeBtn.emit();
  }

  ngOnInit(): void {
    //console.log(this.isUpdate);
    //this.isUpdateLop = this.isUpdate;
  }

}

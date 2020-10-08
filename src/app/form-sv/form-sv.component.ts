import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-form-sv',
  templateUrl: './form-sv.component.html',
  styleUrls: ['./form-sv.component.css']
})
export class FormSVComponent implements OnInit {
  name: string;
  
  svForm: FormGroup;
  nameCtrl: FormControl;
  lopCtrl: FormControl;
  ngaysinhCtrl: FormControl;
  labelPosition: 'nam' | 'nu' = 'nu';
  @Input() sv: any;
  @Input() arrLop;
  @Input() isUpdate: boolean;
  @Output() public closeBtn = new EventEmitter();
  @Output() public getDataSV = new EventEmitter();

  constructor(private fb: FormBuilder, private route: ActivatedRoute) { 
    this.nameCtrl = this.fb.control('', [Validators.required, Validators.maxLength(50), Validators.minLength(5) ]);
    this.lopCtrl = this.fb.control('', Validators.required);
    this.ngaysinhCtrl = this.fb.control('', Validators.required);

    this.svForm = this.fb.group({
      name: this.nameCtrl,
      ngaysinh: this.ngaysinhCtrl,
      lop: this.lopCtrl
    });
  }
  
  updateSV(){
    var res;
    console.log(this.nameCtrl);
    res = {
      id: this.sv.id,
      name: this.svForm.controls.name.value,
      ngaysinh: this.svForm.controls.ngaysinh.value,
      lop: parseInt(this.svForm.controls.lop.value)
    };
      //Reset data name
    this.sv.name = res.name;
    return res;
  }

  addSV(){
    var res;
    res = {
      id: '',
      name: this.svForm.controls.name.value,
      ngaysinh: this.svForm.controls.ngaysinh.value,
      lop: parseInt(this.svForm.controls.lop.value)
    };
    return res;
  }

  closeClick(){
    this.closeBtn.emit();
  }

  onSubmit(){
    var res;
    if (this.isUpdate){
      res = this.updateSV();
    }
    else {
      res = this.addSV();
    }
    //reset form
    this.svForm.reset();
    //Send to parent
    this.getDataSV.emit(res);
  }
  ngOnInit(): void {
    if (this.isUpdate){
      this.nameCtrl.setValue(this.sv.name);
      this.lopCtrl.setValue(this.sv.lop);
      this.ngaysinhCtrl.setValue(this.sv.ngaysinh);
    }
  }

}

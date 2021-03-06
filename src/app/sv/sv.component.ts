import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormSVComponent } from '../form-sv/form-sv.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sv',
  templateUrl: './sv.component.html',
  styleUrls: ['./sv.component.css']
})
export class SvComponent implements OnInit, AfterViewInit {
  isShow = false;
  isUpdate = false;
  nameSv = '';
  sv: any;

  @ViewChild(FormSVComponent, {read: true, static: true}) 
  formupdate: FormSVComponent;

  arrSV = [
    { id: 1, name: 'Nguyen A', ngaysinh: '2020-11-04', lop:1, gender: 'nam'},
    { id: 2, name: 'Nguyen B', ngaysinh: '2020-11-04', lop:1, gender: 'nam'},
    { id: 3, name: 'Nguyen C', ngaysinh: '2020-11-04', lop:2, gender: 'nam'},
    { id: 4, name: 'Nguyen D', ngaysinh: '2020-11-04', lop:2, gender: 'nam'},
    { id: 5, name: 'Nguyen E', ngaysinh: '2020-11-04', lop:3, gender: 'nam'},
    { id: 7, name: 'Nguyen B', ngaysinh: '2020-11-04', lop:1, gender: 'nam'},
    { id: 8, name: 'Nguyen C', ngaysinh: '2020-11-04', lop:2, gender: 'nam'},
    { id: 9, name: 'Nguyen D', ngaysinh: '2020-11-04', lop:2, gender: 'nam'},
    { id: 10, name: 'Nguyen E', ngaysinh: '2020-11-04', lop:3, gender: 'nam'},
    { id: 11, name: 'Nguyen F', ngaysinh: '2020-11-04', lop:3, gender: 'nam'}
  ];
  arrLop = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
  ];

  displayColumn: string[] = ['id','name','ngaysinh', 'lop', 'gender', 'idbtn'];
  dataSource = new MatTableDataSource(this.arrSV);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data);
  }

  deleteSV(id: number){
    this.arrSV.splice(this.arrSV.findIndex(p => p.id === id),1);
    console.log(this.dataSource.data);
    this.dataSource.data = this.arrSV;
  }

  nameLop(id : number){
    var res =this.arrLop.find(p=>p.id===id).name;
    if (res == undefined){
      return 'Không có lớp';
    }
    else return res;
  }
  //Click Update buttons
  updateSV(id: number, el: HTMLElement){
    this.isUpdate = true;
    this.sv =  this.arrSV.find(p=>p.id===id);
    this.isShow = true;
    this.scrollToEl(el);
  }

  clickAddSV(el: HTMLElement){
    this.isUpdate = false;
    this.isShow = true;
    this.scrollToEl(el);
  }

  getDataSV(value){
    if (this.isUpdate){
      console.log(value);
      var index = this.arrSV.findIndex(p=>p.id === value.id);
      this.arrSV[index] = value; 
      this.dataSource.data = this.arrSV;
    }
    else{
      console.log(value);
      this.arrSV.unshift({
        id: this.arrSV[this.arrSV.length-1].id+1,
        name: value.name,
        lop: value.lop,
        ngaysinh: value.ngaysinh,
        gender: value.gender
      });
      this.dataSource.data = this.arrSV;
    }
  }

  // getDataLop(value){
  //   console.log(value);
  //   this.isUpdateLop = !this.isUpdateLop; 
  //   var index = this.arrLop.findIndex(p=>p.id===value.id);
  //   this.arrLop[index] = value; 
  // }
  scrollToEl(el : HTMLElement){
    el.scrollIntoView({ block: 'start',  behavior: 'smooth'});
  }
  closeForm(){
    this.isShow = false;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  ngOnInit(): void {
  }
}

import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css']
})
export class LopComponent implements OnInit {

  lop: any;
  arrLop = [
    {id: 1, name: 'a', gv: 'Tran A'},
    {id: 2, name: 'b', gv: 'Tran A'},
    {id: 3, name: 'c', gv: 'Tran A'}
  ];
  isUpdate = false;
  isShow = false;
  displayColumn: string[] = ['id','name','gv', 'idbtn'];
  dataSource = new MatTableDataSource(this.arrLop);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data);
  }
  constructor() { }

  deleteLop(id: number){
    this.arrLop.splice(this.arrLop.findIndex(p => p.id === id),1);
    this.dataSource.data = this.arrLop;
  }

  clickAddLop(el: HTMLElement){
    this.isUpdate = false;
    this.isShow = true;
    this.scrollToEl(el);
  }
  //Click Update buttons
  updateLop(id: number, el: HTMLElement){
    this.isUpdate = true;
    this.lop =  this.arrLop.find(p=>p.id===id);
    this.isShow = true;
    this.scrollToEl(el);
  }
  getData(value){
    if (this.isUpdate){
      console.log(value);
      var index = this.arrLop.findIndex(p=>p.id===value.id);
      this.arrLop[index] = value; 
      this.dataSource.data = this.arrLop;
    }
    else{
      console.log(value);
      this.arrLop.unshift({
        id: this.arrLop[this.arrLop.length-1].id+1,
        name: value.name,
        gv: value.gv
      });
      this.dataSource.data = this.arrLop;
    }
  }
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

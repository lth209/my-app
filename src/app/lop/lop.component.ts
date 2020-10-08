import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-lop',
  templateUrl: './lop.component.html',
  styleUrls: ['./lop.component.css']
})
export class LopComponent implements OnInit {
  arrLop = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'}
  ];

  displayColumn: string[] = ['id','name', 'idbtn'];
  dataSource = new MatTableDataSource(this.arrLop);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource.data);
  }
  constructor() { }

  deleteLop(id: number){
    this.arrLop.splice(this.arrLop.findIndex(p => p.id === id),1);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddGstComponent } from '../add-gst/add-gst.component';


export interface UserData {
  id: number;
  gst:number;
  cgst: number;
  sgst: number;
  Description:string;
  
}

const UserData: UserData[] = [
  { id: 1, gst: 40, cgst:20, sgst: 234,Description:'Gst', },
  { id: 1, gst: 50, cgst:25, sgst: 234,Description:'14For more then', },
  { id: 1, gst: 90, cgst:45, sgst: 234,Description:'Raja', },
];

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {
  displayedColumns: string[] = ['id','gst','cgst','sgst','Description','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dailog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource(UserData);
  }

  ngOnInit(): void {
  }

  gst_edit(row: any) {
    this.dailog.open(AddGstComponent, {
      data: row,
    });
  }

  add_gst() {
    this.dailog.open(AddGstComponent, {
      disableClose: true
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}


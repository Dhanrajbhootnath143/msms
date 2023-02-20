import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';


export interface UserData {
  id: number;
  Customer: string;
  bill_number: number;
  Back_dues: number;
  paid:number;
  Current_dues:number;
  
}

const UserData: UserData[] = [
  { id: 1, Customer: 'Raja', bill_number:9153634848,Back_dues:5678,paid:3456,Current_dues:243,},
  { id: 1, Customer: 'Roushan', bill_number:9153634848,Back_dues:5678,paid:456,Current_dues:243, },
  { id: 1, Customer: 'Dipu', bill_number:9153634848,Back_dues:5678,paid:4567,Current_dues:243, },
];
@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {
  displayedColumns: string[] = ['id','Customer','bill_number','Back_dues','paid','Current_dues',];
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

  course_edit(row: any) {
    this.dailog.open(AddEditPartyComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddEditPartyComponent, {
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


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';


export interface UserData {
  id: number;
  name: string;
  Mobile_Number: number;
  Aadhar_number:number;
  Address: string;
  photo: string;

  
}

const UserData: UserData[] = [
  { id: 1, name: 'Raja', Mobile_Number:9153634848,Aadhar_number:345556544545, Address:'Hajipur', photo:'logo.png',},
  { id: 1, name: 'Roushan', Mobile_Number:9153634848,Aadhar_number:345556544545,Address:'Hajipur', photo:'logo.png',},
  { id: 1, name: 'Dipu', Mobile_Number:9153634848,Aadhar_number:345556544545,Address:'Hajipur',photo:'logo.png', },
];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['id','name','Mobile_Number','Aadhar_number','Address','photo','action'];
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

  employee_edit(row: any) {
    this.dailog.open(AddEmployeeComponent, {
      data: row,
    });
  }

  add_employee() {
    this.dailog.open(AddEmployeeComponent, {
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


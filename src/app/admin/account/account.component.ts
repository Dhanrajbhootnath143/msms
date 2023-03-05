import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddAccountComponent } from '../add-account/add-account.component';

export interface UserData {
  id: number;
  Today_Sale: number;
  Today_Expense: number;
  cash: number;
  Deposit:number;
  Closing_Amount:number;
  Remaraks:string;
  Date:string;
  
  
}

const UserData: UserData[] = [
  { id: 1, Today_Sale: 3456, Today_Expense:9153634848,cash:34567,Deposit:4881,Closing_Amount:56758,Date:'30/09/2009',Remaraks:'today' },
  { id: 1, Today_Sale: 3456, Today_Expense:9153634848,cash:23456,Deposit:738,Closing_Amount:43322,Date:'30/09/2009',Remaraks:'hjp' },
  { id: 1, Today_Sale: 3456, Today_Expense:9153634848,cash:34567,Deposit:8793207,Closing_Amount:2476,Date:'30/09/2009',Remaraks:'24-06-22' },
];

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['id','Today_Sale','Today_Expense','cash','Deposit','Closing_Amount','Date','Remaraks','action',];
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
    this.dailog.open(AddAccountComponent, {
      data: row,
    });
  }

  add_Account() {
    this.dailog.open(AddAccountComponent, {
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


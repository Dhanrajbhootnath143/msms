import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddDuesComponent } from '../add-dues/add-dues.component';



export interface UserData {
  id: number;
  Customer: string;
  Bill_Number: number;
  Amount:number;
  Paid:number;
  Dues:number;
}
const UserData: UserData[] = [
  { id: 1, Customer: 'Raja',Bill_Number:3,Amount:500,Paid:743,Dues:332, },
 
];

@Component({
  selector: 'app-dues',
  templateUrl: './dues.component.html',
  styleUrls: ['./dues.component.css']
})
export class DuesComponent implements OnInit {
  displayedColumns: string[] = ['id','Customer','Bill_Number','Amount','Paid','Dues','Date','action'];
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

  dues_edit(row: any) {
    this.dailog.open(AddDuesComponent, {
      data: row,
    });
  }

  add_dues() {
    this.dailog.open(AddDuesComponent, {
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


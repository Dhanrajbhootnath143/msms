import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

export interface UserData {
  id: number;
  Customer: string;
  Bill_Number: string;
  Total_amount: number;
  cgst:string;
  sgst:number;
  Discount:number;
  Basic_amount:number;
  Totel_amount:number;

  
}
const UserData: UserData[] = [
  // { id: 1, Customer: 'Akhilesh',Bill_Number:'VE/2/22-23',Total_amount:500,Paid:743,Dues:332, },
]


@Component({
  selector: 'app-sale-cancel',
  templateUrl: './sale-cancel.component.html',
  styleUrls: ['./sale-cancel.component.css']
})
export class SaleCancelComponent implements OnInit {
  displayedColumns: string[] = ['id','Customer','Bill_Number','Quantity','cgst','sgst','Discount','Basic_amount','Totel_amount',];
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

  add_party() {
    this.dailog.open(AddItemComponent, {
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


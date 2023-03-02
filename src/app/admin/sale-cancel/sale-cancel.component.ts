import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface UserData {
  id: number;
  Customer: string;
  Bill_Number: string;
  Total_amount: number;
  Basic_amount:number;
  Dues:number;
  Gst:number;
  Discount:number;
  Cancel_rancel:string;
  Date:string;

  
}
const UserData: UserData[] = [
  { id: 1, Customer:'raja',Bill_Number:'VE/2/22-23',Total_amount:500,Basic_amount:800,Dues:76,Gst:0,Discount:0,Cancel_rancel:'Test',Date:'2022-06-27',},
]


@Component({
  selector: 'app-sale-cancel',
  templateUrl: './sale-cancel.component.html',
  styleUrls: ['./sale-cancel.component.css']
})
export class SaleCancelComponent implements OnInit {
  displayedColumns: string[] = ['id','Customer','Bill_Number','Total_amount','Basic_amount','Dues','Gst','Discount','Cancel_rancel','Date','action',];
  dataSource!: MatTableDataSource<UserData>;

 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private route:Router
    ) {
    this.dataSource = new MatTableDataSource(UserData);
  }

  ngOnInit(): void {
  }

  edit_sale_cancel(row: any) {
    this.route.navigate(['home/sale_cancel/add_sale_cancel'])
  }

  add_purchase() {
   this.route.navigate(['home/sale_cancel/add_sale_cancel'])
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}


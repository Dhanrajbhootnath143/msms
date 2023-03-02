import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { Router } from '@angular/router';


export interface UserData {
  id: number;
  customer:number;
  Bill_Number: number;
  Totel_amount:number;
  Basic_amount: number;
  Dues:number;
  gst:number;
  Discount:number;
  
  
  
}

const UserData: UserData[] = [
  { id: 1,customer:78, Bill_Number: 273,Totel_amount:3456, Basic_amount:83457, Dues:56, gst:3456,Discount:284,},
  { id: 1,customer:78, Bill_Number: 273,Totel_amount:3456, Basic_amount:83457,Dues:56, gst:456,Discount:284, },
  { id: 1,customer:78, Bill_Number: 273,Totel_amount:3456, Basic_amount:83457,Dues:56, gst:4567,Discount:284, },
];

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  displayedColumns: string[] = ['id','customer','Bill_Number','Totel_amount','Basic_amount','Dues','gst','Discount','date','action'];
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

  edit_sale(row: any) {
    this.route.navigate(['home/sale/addsale'])
  }

  add_sale() {
   this.route.navigate(['home/sale/addsale'])
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


export interface UserData {
  id: number;
  Party: string;
  Basic_amount:string
  Discount: string;
  sgst: string;
  cgst:string;
  ro:string;
  net_amount:string;
  Bill_number:string;
}

const UserData: UserData[] = [
  
];

@Component({
  selector: 'app-purchase-cancel',
  templateUrl: './purchase-cancel.component.html',
  styleUrls: ['./purchase-cancel.component.css']
})
export class PurchaseCancelComponent implements OnInit {
  displayedColumns: string[] = ['id','Party','Basic_amount','Discount','sgst','cgst','ro','net_amount','Bill_number','action',];
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

  purchase_edit(row: any) {
    this.dailog.open(PurchaseCancelComponent, {
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



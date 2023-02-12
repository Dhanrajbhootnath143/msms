import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { Router } from '@angular/router';


export interface UserData {
  id: number;
  Party: string;
  Basic_amount: number;
  Discount:number;
  sgst:number;
  cgst:number;
  ro:number;
  Net_amount:number;
  Bill_number:string;
  
}

const UserData: UserData[] = [
  { id: 1, Party: 'Raja', Basic_amount:83457,Discount:284,sgst:48, cgst:346, ro:84,Net_amount:69975,Bill_number:'kb43776496',},
  { id: 1, Party: 'Roushan', Basic_amount:83457,Discount:284,sgst:48,cgst:346,ro:84,Net_amount:69975,Bill_number:'kb43776496', },
  { id: 1, Party: 'Dipu', Basic_amount:83457,Discount:284,sgst:48,cgst:346,ro:84,Net_amount:69975,Bill_number:'kb43776496', },
];

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  displayedColumns: string[] = ['id','Party','Basic_amount','Discount','sgst','cgst','ro','Net_amount','Bill_number','action'];
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

  edit_purch(row: any) {
   
  }

  add_purchase() {
   this.route.navigate(['home/purchase/addpurch'])
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}


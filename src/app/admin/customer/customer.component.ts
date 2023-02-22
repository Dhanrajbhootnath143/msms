import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';



export interface UserData {
  id: number;
  Shop_name: string;
  Owner_name: string;
  Contact_number:number;
  Address:string;
}
const UserData: UserData[] = [
  { id: 1, Shop_name: 'Raja',Owner_name:'dipu',Contact_number:3455565423,Address:'hajipur', },
  { id: 1, Shop_name: 'Roushan',Owner_name:'dipu',Contact_number:7768878732, Address:'hajipur',},
  { id: 1, Shop_name: 'Dipu',Owner_name:'dipu', Contact_number:34555654454,Address:'hajipur', },
];


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['id','Shop_name','Owner_name','Contact_number','Address','action'];
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

  customer_edit(row: any) {
    this.dailog.open(AddCustomerComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddCustomerComponent, {
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


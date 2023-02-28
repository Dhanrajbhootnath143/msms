import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


export interface UserData {
  id: number;
  Product: string;
  category: string;
  Company_name: string;
  Expiry:string;
  Remaining:string;

  
}

const UserData: UserData[] = [
  { id: 1, Product: 'ACIFY', category:'SYRUP',Company_name:'VETCARE',Expiry:'02/23',Remaining:'Expird',},
  
];

@Component({
  selector: 'app-expiry-report',
  templateUrl: './expiry-report.component.html',
  styleUrls: ['./expiry-report.component.css']
})
export class ExpiryReportComponent implements OnInit {

  displayedColumns: string[] = ['id','Product','category','Company_name','Expiry','Remaining',];
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}



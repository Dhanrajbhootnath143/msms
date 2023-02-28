import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


export interface UserData {
  id: number;
  Category: string;
  Product: string;
  Company_name: string;
  Purchase:number;
  Available:number;
  Sale:number;
  
}

const UserData: UserData[] = [
  { id: 1, Category: 'Syrup', Product:'ACIFT',Company_name:'VETCARE',Purchase:22,Sale:16,Available:6,},
  { id: 1, Category: 'Drup', Product:'AZITHRAL SP',Company_name:'ALEMBIC',Purchase:17,Sale:0,Available:11, },
  { id: 1, Category: 'Liquid', Product:'B-904',Company_name:'VENKYS',Purchase:8,Sale:30,Available:8, },
];

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent implements OnInit {
  displayedColumns: string[] = ['id','Category','Product','Company_name','Purchase','Sale','Available',];
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



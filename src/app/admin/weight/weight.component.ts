import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddWeightComponent } from '../add-weight/add-weight.component';

export interface UserData {
  id: number;
  name: string;
  Mobile_Number: number;
  Address: string;
  Contact_person:string;
  
}

const UserData: UserData[] = [
  { id: 1, name: 'Raja', Mobile_Number:9153634848,Address:'Hajipur',Contact_person:'Diraj', },
  { id: 1, name: 'Roushan', Mobile_Number:9153634848,Address:'Hajipur',Contact_person:'Mohan', },
  { id: 1, name: 'Dipu', Mobile_Number:9153634848,Address:'Hajipur',Contact_person:'Raja', },
];

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  displayedColumns: string[] = ['id','name','Mobile_Number','Address','Contact_person','action'];
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
    this.dailog.open(AddWeightComponent, {
      data: row,
    });
  }

  add_weight() {
    this.dailog.open(AddWeightComponent, {
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



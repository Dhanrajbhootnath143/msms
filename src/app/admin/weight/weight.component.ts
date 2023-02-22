import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AddWeightComponent } from '../add-weight/add-weight.component';


export interface UserData {
  id: number;
  weight: string;
  Description: string;
}
const UserData: UserData[] = [
  { id: 1, weight: '2', Description:'kg', },
  { id: 1, weight: '3',Description:'liter', },
  { id: 1, weight: '6',Description:'mili garam',},
];


@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {
  displayedColumns: string[] = ['id','weight','Description','action'];
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

  add_party() {
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



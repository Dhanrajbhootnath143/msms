import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AddUnitComponent } from '../add-unit/add-unit.component';

export interface UserData {
  id: number;
  Unit: string;
  Description: string;
}

const UserData: UserData[] = [
  { id: 1, Unit: 'kg', Description:'kg', },
  { id: 1, Unit: 'liter',Description:'liter', },
  { id: 1, Unit: 'mili garam',Description:'mili garam',},
];


@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['id','Unit','Description','action'];
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

  unit_edit(row: any) {
    this.dailog.open(AddUnitComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddUnitComponent, {
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



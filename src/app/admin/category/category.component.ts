import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AddCategoryComponent } from '../add-category/add-category.component';



export interface UserData {
  id: number;
  Category: string;
  Description: string;
}
const UserData: UserData[] = [
  { id: 1, Category: 'Drup', Description:'Drup', },
  { id: 1, Category: 'Injection',Description:'Injection', },
  { id: 1, Category: 'Luquit',Description:' Luquit',},
];

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id','Category','Description','action'];
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

  catogory_edit(row: any) {
    this.dailog.open(AddCategoryComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddCategoryComponent, {
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



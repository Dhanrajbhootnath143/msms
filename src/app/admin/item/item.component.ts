import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

export interface UserData {
  id: number;
  name: string;
  Company: string;
  Category: string;
  Pack:string;
  mrp:number;
  Purchase_amount:number;
  Sale_amount:number;

  
}
const UserData: UserData[] = [
  { id: 1, name: 'ACIFY', Company:'VETCARE',Category:'Liquid',Pack:'5LIT',mrp:1442,Purchase_amount:1150,Sale_amount:1400,},
  { id: 2, name: 'ACIFY', Company:'VETCARE',Category:'Liquid',Pack:'5LIT',mrp:1442,Purchase_amount:1150,Sale_amount:1400,},
  { id: 3, name: 'ACIFY', Company:'VETCARE',Category:'Liquid',Pack:'5LIT',mrp:1442,Purchase_amount:1150,Sale_amount:1400,},
  { id: 4, name: 'ACIFY', Company:'VETCARE',Category:'Liquid',Pack:'5LIT',mrp:1442,Purchase_amount:1150,Sale_amount:1400,},
];


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['id','name','Company','Category','Pack','mrp','Purchase_amount','Sale_amount','action'];
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

  item_edit(row: any) {
    this.dailog.open(AddItemComponent, {
      data: row,
    });
  }

  add_item() {
    this.dailog.open(AddItemComponent, {
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


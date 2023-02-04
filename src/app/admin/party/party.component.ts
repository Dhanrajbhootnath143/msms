import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';


export interface UserData {
  id: number;
  name: string;
  Mobile_Number: number;
  Address: string;
  Contact_person:string;
  
}

const UserData: UserData[] = [
  { id: 1, name: 'Gs Learning', Mobile_Number:9153634848,Address:'rohit@gmail.com',Contact_person:'bhb', },
  { id: 1, name: 'Gs Learning', Mobile_Number:9153634848,Address:'rohit@gmail.com',Contact_person:'bhb', },
  { id: 1, name: 'Gs Learning', Mobile_Number:9153634848,Address:'rohit@gmail.com',Contact_person:'bhb', },
];


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
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
    this.dailog.open(AddEditPartyComponent, {
      data: row,
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


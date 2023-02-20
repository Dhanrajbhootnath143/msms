import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddExpenseComponent } from '../add-expense/add-expense.component';

export interface UserData {
  id: number;
  Expense_Type: string;
  Amount: number;
  name: string;
  contact:number;
 
  Description:string;
  
}

const UserData: UserData[] = [
  { id: 1, Expense_Type: 'Others', Amount:9153,name:'Kajal',contact:5562882098,Description:'Soppping',},
  { id: 1, Expense_Type: 'Others', Amount:9189,name:'Karishma',contact:5562882098,Description:'Soppping', },
  { id: 1, Expense_Type: 'Shlary', Amount:9638,name:'Kishan',contact:5563442098,Description:'Soppping', },
];

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  displayedColumns: string[] = ['id','Expense_Type','Amount','name','contact','date','Description',];
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
    this.dailog.open(AddExpenseComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddExpenseComponent, {
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


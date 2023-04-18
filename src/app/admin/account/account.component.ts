import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddAccountComponent } from '../add-account/add-account.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';
import { DeleteDataComponent } from '../delete-data/delete-data.component';

export interface UserData {
  account_id: number;
  today_sale: number;
  expense: number;
  cash: number;
  deposit:number;
  closeing_amount:number;
  remarks:string;
  date:string;
  
  
}


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['account_id','today_sale','expense','cash','deposit','closeing_amount','date','remarks','action',];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  deletevalue: any;
  account_data: any = 1
 

  constructor(
    public dialog: MatDialog,  
    private dailog: MatDialog,
    private service:MsmsService,
    private router:Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }  }

  ngOnInit(): void {
  
      this.service.get_account().subscribe(
        (account_data:any)=>{
         this.dataSource = new MatTableDataSource(account_data.data);
         this.account_data = account_data.data.length
         this.dataSource.sort = this.sort;
         this.dataSource.paginator = this.paginator
  
        }
      )
    }
  

  course_edit(row: any) {
    this.dailog.open(AddAccountComponent, {
      data: row,
    });
  }

  add_Account() {
    this.dailog.open(AddAccountComponent, {
      disableClose: true
    });
  }
  openDialog(row: any) {
    const dialogRef = this.dailog.open(DeleteDataComponent, {
      data: this.deletevalue,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
        const deldata = new FormData();
        deldata.append('account_id', row.account_id);
        this.service.account_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/account'])
          }
        )
      }
      else { }
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


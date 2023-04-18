import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { AddDuesComponent } from '../add-dues/add-dues.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';
import { UserData } from '../account/account.component';
import { DeleteDataComponent } from '../delete-data/delete-data.component';



@Component({
  selector: 'app-dues',
  templateUrl: './dues.component.html',
  styleUrls: ['./dues.component.css']
})
export class DuesComponent implements OnInit {
  displayedColumns: string[] = ['dues_id','customer_name','bill_number','pey','current_dues','back_dues','date','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  duse_data:any
  deletevalue: any = 1

  constructor(
    private dailog: MatDialog,
    private servies : MsmsService,
    private router : Router,
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
   }

  ngOnInit(): void {
    this.servies.get_dues().subscribe(
      (duse_data:any)=>{
        this.dataSource = new MatTableDataSource(duse_data.data);
        this.duse_data = duse_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
  }

  dues_edit(row: any) {
    this.dailog.open(AddDuesComponent, {
      data: row,
    });
  }

  add_dues() {
    this.dailog.open(AddDuesComponent, {
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
        deldata.append('duse_id', row.duse_id);
        this.servies.gst_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/duse'])
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
  delete_dues(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deletegst = new FormData();
      deletegst.append('dues_id',row.dues_id),
      this.servies.dues_delete(deletegst).subscribe(
        (res:any) => {
          this.router.navigate(['/home/dues']);
        }
      )
    }

  }
 
}



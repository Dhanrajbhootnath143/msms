import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerComponent } from '../add-customer/add-customer.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';
import { DeleteDataComponent } from '../delete-data/delete-data.component';



export interface UserData {
  id: number;
  shop_name: string;
  Owner_name: string;
  contact_number:number;
  address:string;
}



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedColumns: string[] = ['cust_id','shop_name','owner_name','contact_number','address','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  customer_data:any
  deletevalue: any = 1

  constructor(
    private dailog: MatDialog,
    private service : MsmsService,
    private router : Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.service.get_customer().subscribe(
      (customer_data:any)=>{
       this.dataSource = new MatTableDataSource(customer_data.data);
       this.customer_data = customer_data.data.length
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator

      }
    )
  }

  customer_edit(row: any) {
    this.dailog.open(AddCustomerComponent, {
      data: row,
    });
  }

  add_customer() {
    this.dailog.open(AddCustomerComponent, {
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
        deldata.append('cust_id', row.cust_id);
        this.service.customer_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/customer'])
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
  delete_customer(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deletecustomer = new FormData();
      deletecustomer.append('cust_id',row.cust_id),
      this.service.customer_delete(deletecustomer).subscribe(
        (res:any) => {
     this.router.navigate(['/home/customer']);
}
      )
    }
  }
 
}



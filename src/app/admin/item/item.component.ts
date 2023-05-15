import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { MsmsService } from 'src/app/msms.service';
import {  Router } from '@angular/router';
import { DeleteDataComponent } from '../delete-data/delete-data.component';


export interface UserData {
item_id:number,
item_name:string,
company:string,
cat_name:string,
pack:string,
mrp:number,
purchase_amount:number,
batch_no:string,
sale_amount:number


}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['item_id','item_name','company','cat_name','pack','mrp','purchase_amount','sale_amount','batch_no','action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  item_data:any
  deletevalue: any = 1

  constructor(
    private dailog: MatDialog,
    private service:MsmsService,
    private router:Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.service.get_item().subscribe(
      (item_data : any)=>{
        this.dataSource = new MatTableDataSource(item_data.data);
        this.item_data = item_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator

      }
    )
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
  openDialog(row: any) {
    const dialogRef = this.dailog.open(DeleteDataComponent, {
      data: this.deletevalue,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
        const deldata = new FormData();
        deldata.append('item_id', row.item_id);
        this.service.item_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/item'])
          }
        )
      }
      else { }
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.item_data = this.dataSource.filteredData.length


    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete_item(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deleteitem = new FormData();
      deleteitem.append('item_id',row.item_id),
      this.service.item_delete(deleteitem).subscribe(
        (res:any) => {
          this.router.navigate(['/home/item']);
        }
      )
    }
  }
 
}


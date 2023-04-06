import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddGstComponent } from '../add-gst/add-gst.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';


export interface UserData {
  gst_id: number;
  gst:number;
  cgst: number;
  sgst: number;
  description:string;
  
}


@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {
  displayedColumns: string[] = ['gst_id','gst','cgst','sgst','description','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  gst_data:any

  constructor(
    private dailog: MatDialog,
    private sarvies : MsmsService,
    private route :Router,
  ) {
  }

  ngOnInit(): void {
    this.sarvies.get_gst().subscribe(
      (gst_data:any)=>{
        this.dataSource = new MatTableDataSource(gst_data.data);
        this.gst_data = gst_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
  }

  gst_edit(row: any) {
    this.dailog.open(AddGstComponent, {
      data: row,
    });
  }

  add_gst() {
    this.dailog.open(AddGstComponent, {
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
  delete_gst(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deletegst = new FormData();
      deletegst.append('gst_id',row.gst_id),
      this.sarvies.gst_delete(deletegst).subscribe(
        (res:any) => {
          this.route.navigate(['/home/gst']);
        }
      )
    }
  }
}

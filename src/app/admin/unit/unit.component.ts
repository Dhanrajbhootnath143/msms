import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AddUnitComponent } from '../add-unit/add-unit.component';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  displayedColumns: string[] = ['unit_id','unit_name','unit_desc','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  unit_data:any

  constructor(
    private dailog: MatDialog,
    private servies :MsmsService,
    private route:Router
  ) {
   
  }

  ngOnInit(): void {
    this.servies.get_unit().subscribe(
      (unit_data:any)=>{
       this.dataSource = new MatTableDataSource(unit_data.data);
       this.unit_data = unit_data.data.length
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator

      }
    )
  }

  unit_edit(row: any) {
    this.dailog.open(AddUnitComponent, {
      data: row,
    });
  }

  add_unit() {
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

  delete_unit(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deleteparty = new FormData();
      deleteparty.append('unit_id',row.unit_id),
      this.servies.unit_delete(deleteparty).subscribe(
        (res:any) => {
          this.route.navigate(['/home/unit']);
        }
      )
    }
  }
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { AddUnitComponent } from '../add-unit/add-unit.component';
import { MsmsService } from 'src/app/msms.service';
import { DeleteDataComponent } from '../delete-data/delete-data.component';

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
  deletevalue: any = 1;

  constructor(
    public dialog: MatDialog,
    private dailog: MatDialog,
    private servies :MsmsService,
    private router:Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
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
  onDelet(row: any) {
    const dialogRef = this.dailog.open(DeleteDataComponent, {
      data: this.deletevalue,
    });


    dialogRef.afterClosed().subscribe(result => {
      if (this.deletevalue == result) {
        const deldata = new FormData();
        deldata.append('unit_id', row.unit_id);
        this.servies.unit_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/unit'])
          }
        )
      }
      else { 
          return
      }
    });
  }

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.unit_data = this.dataSource.filteredData.length

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
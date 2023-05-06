import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';
import { DeleteDataComponent } from '../delete-data/delete-data.component';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['emp_id','emp_name','mobile','aadhar_number','address','photo','action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  employee_data:any
  upload_img_url = 'http://localhost/uploads/';
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
    this.service.get_employee().subscribe(
      (employee_data:any)=>{
       this.dataSource = new MatTableDataSource(employee_data.data);
       this.employee_data = employee_data.data.length
       this.dataSource.sort = this.sort;
       this.dataSource.paginator = this.paginator

      }
    )
    
  }
  employee_edit(row: any) {
    this.dailog.open(AddEmployeeComponent, {
      data: row,
    });
  }

  add_employee() {
    this.dailog.open(AddEmployeeComponent, {
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
        deldata.append('emp_id', row.emp_id);
        this.service.employee_delete(deldata).subscribe(
          (res: any) => {
            console.log(res)
            alert('Data Delete Successfylly...')
            this.router.navigate(['/home/employee'])
          }
        )
      }
      else { }
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.employee_data = this.dataSource.filteredData.length

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete_employee(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deleteemployee = new FormData();
      deleteemployee.append('emp_id',row.emp_id),
      this.service.employee_delete(deleteemployee).subscribe(
        (res:any) => {
          this.router.navigate(['/home/employee']);
        }
      )
    }
  }
  }



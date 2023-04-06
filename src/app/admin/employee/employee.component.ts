import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';



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
  constructor(
    private dailog: MatDialog,
    private service:MsmsService,
    private route:Router
  ) {
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
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

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
          this.route.navigate(['/home/employee']);
        }
      )
    }
  }
  }



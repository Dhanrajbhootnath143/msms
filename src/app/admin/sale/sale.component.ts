import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';




@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  displayedColumns: string[] = ['sale_id', 'cust_id_fk', 'bill_no', 'total_amount', 'basic_amount', 'duse', 'gst', 'discount', 'sale_date', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  sale_data: any;

  constructor(
    private route: Router,
    private sarvies: MsmsService

  ) {
  }

  ngOnInit(): void {
    this.sarvies.get_sale().subscribe(
      (sale_data: any) => {
        this.dataSource = new MatTableDataSource(sale_data.data);
        this.sale_data = sale_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
  }


  edit_sale(row: any) {
    this.route.navigate(['home/sale/addsale'])
  }

  add_sale() {
    this.route.navigate(['home/sale/addsale'])
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.sale_data = this.dataSource.filteredData.length

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


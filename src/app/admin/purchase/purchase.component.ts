import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';


export interface UserData {
  purch_id: number;
  party_name: string;
  basic_amount: number;
  discount:number;
  sgst:number;
  cgst:number;
  ro:number;
  net_amount:number;
  Bill_number:string;
  
}




@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  displayedColumns: string[] = ['purch_id','party_name','purch_party_bill_no','basic_amount','discount','sgst','cgst','ro','net_amount','purch_date','action'];
  dataSource!: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  purch_data:any;

  constructor(
    private route:Router,
    private service:MsmsService
    
    ) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.service.get_purch_view().subscribe(
      (purch_data: any) => {
        this.dataSource = new MatTableDataSource(purch_data.data);
        this.purch_data = purch_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  edit_purch(row: any) {
    this.route.navigate(['home/purchase/addpurch'],row)
  }

  add_purchase() {
   this.route.navigate(['home/purchase/addpurch'])
  }
  onDrafBill(row: any) {
    this.route.navigate(['home/purchase/addpurch'], row)

  }
 
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.purch_data = this.dataSource.filteredData.length

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}


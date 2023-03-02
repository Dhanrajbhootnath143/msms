import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddAccountComponent } from '../add-account/add-account.component';

export interface PeriodicElement {
  sn_no: number;
  Item_Name: string;
  Pack: string;
  Company: string;
  Quantity: number;
  Rate: number;
  Discount:number;
  gst:number;
  Net_Rete:number;
  Amount:number;
}

const ELEMENT_DATA:PeriodicElement [] = [
  {sn_no: 1,  Item_Name: 'B-904', Pack: '200ml', Company: 'VENKYS', Quantity: 4, Rate:200  ,Discount:0, gst:0, Net_Rete:200,Amount:800,},
];

@Component({
  selector: 'app-add-sale-cancel',
  templateUrl: './add-sale-cancel.component.html',
  styleUrls: ['./add-sale-cancel.component.css']
})
export class AddSaleCancelComponent implements OnInit {
  displayedColumns: string[] = ['sn_no', 'Item_Name', 'Pack', 'Company', 'Quantity', 'Rate', 'Discount', 'gst', 'Net_Rete', 'Amount', ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private matdialog:MatDialog
  ){

  }
  ngOnInit(): void {
   
  }
  add_shop(){
   this.matdialog.open(AddAccountComponent) 
  }
 
}
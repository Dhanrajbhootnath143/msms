import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  sn_no: number;
  Item_Name: string;
  Pack: string;
  Company: string;
  Quantity: number;
  Rate: number;
  Discount:number;
  Action: string;
  gst:number;
  Net_Rete:number;
  Amount:number;
}
const ELEMENT_DATA:PeriodicElement [] = [
  {sn_no: 1,  Item_Name: 'Droup', Pack: '4', Company: 'Raj', Quantity: 457, Rate:55  ,Discount:67, gst:896, Net_Rete:578,Amount:222,Action:''},
];
@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {
  customer_form: any
  displayedColumns: string[] = ['sn_no', 'Item_Name', 'Pack', 'Company', 'Quantity', 'Rate', 'Discount', 'gst', 'Net_Rete', 'Amount', 'Action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  Customer_form: any;
  Item_form:any;
  Final_form:any;
  constructor(
    private fb:FormBuilder
  ){

  }
  ngOnInit(): void {
    this.Customer_form = this.fb.group({
      party_id:['', Validators.required],
      name:['', Validators.required],
      Mobile_Number:['', Validators.required],
      Email:['',Validators.required],
      Address:['',Validators.required],
     })
  
     this.Item_form = this.fb.group({
      Customer:['',Validators.required],
      Category:['',Validators.required],
      Iten:['',Validators.required],
      Company_Name:['',Validators.required],
      HSN_No:['',Validators.required],
      Batch_No:['',Validators.required],
      Unit:['',Validators.required],
      MRP:['',Validators.required],
      Pack:['',Validators.required],
      Rate:['',Validators.required],
      date:['',Validators.required],
      Quantity:['',Validators.required],
      Total:['',Validators.required],
      Fee:['',Validators.required],
      Discount:['',Validators.required],
      GST:['',Validators.required],
      Net_Rate:['',Validators.required],
      Amount:['',Validators.required],
  
     })



    this.Final_form =  this.fb.group({
      Basic_Amount:['',Validators.required],
      Discount:['',Validators.required],
      GST:['',Validators.required],
      SGST:['',Validators.required],
      ro:['',Validators.required],
      Net_amount:['',Validators.required],
      Bill_Number:['',Validators.required],
      Date:['',Validators.required],
      
     })
    
   
  }


  customer_onsubmit(){
    console.log(this.Customer_form.value)
  }

  item_onsubmit(){
    console.log(this.Item_form.value)
  }
  final_onsubmit(){
    console.log(this.Final_form.value)
  }
 
}
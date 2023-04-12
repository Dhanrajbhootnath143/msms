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
  displayedColumns: string[] = ['sn_no', 'item_name', 'pack', 'company', 'quantity', 'rate', 'discount', 'gst', 'net_rete', 'amount', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_form: any;
  item_form:any;
  final_form:any;
  constructor(
    private fb: FormBuilder
  ){

  }
  ngOnInit(): void {
   this.party_form = this.fb.group({
    party_id:['', Validators.required],
    party_name:['', Validators.required],
    mobile_number:['', Validators.required],
    email_id:['',Validators.required],
    address:['',Validators.required],
   })

   this.item_form = this.fb.group({
    item_party:['',Validators.required],
    category:['',Validators.required],
    iten:['',Validators.required],
    company_name:['',Validators.required],
    hsn_no:['',Validators.required],
    batch_no:['',Validators.required],
    unit:['',Validators.required],
    mrp:['',Validators.required],
    pack:['',Validators.required],
    rate:['',Validators.required],
    date:['',Validators.required],
    quantity:['',Validators.required],
    total:['',Validators.required],
    fee:['',Validators.required],
    discount:['',Validators.required],
    gst:['',Validators.required],
    net_rate:['',Validators.required],
    amount:['',Validators.required],

   })
   this.final_form =  this.fb.group({
    basic_amount:['',Validators.required],
    gst:['',Validators.required],
    sgst:['',Validators.required],
    cgst:['',Validators.required],
    discount:['',Validators.required],
    amount:['',Validators.required],
    back_duse:['',Validators.required],
    ro:['',Validators.required],
    totel_amount:['',Validators.required],
    paid:['',Validators.required],
    dues:['',Validators.required],
    date:['',Validators.required],
   })
  }

  onsubmit(){
    console.log(this.party_form.value)  
  }
  onsubm(){
    console.log(this.item_form.value)
 
  }

  onsubmi(){
    console.log(this.final_form.value)
  
  }
  
  
}
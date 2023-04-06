import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  sn_no: number;
  item_name: string;
  pack: string;
  company: string;
  quantity: number;
  rate: number;
  discount:number;
  action: string;
  gst:number;
  net_rete:number;
  amount:number;

}

const ELEMENT_DATA:PeriodicElement [] = [
  {sn_no: 1,  item_name: 'Droup', pack: '5', company: 'Raj', quantity: 457, rate:55  ,discount:67, gst:896,  net_rete:578,amount:222,action: ''},
];
@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  displayedColumns: string[] = ['sn_no', 'item_name', 'pack', 'company', 'quantity', 'rate', 'discount', 'gst', 'net_rete', 'amount', 'action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_form: any;
  Item_form:any;
  Final_form:any;
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

   this.Item_form = this.fb.group({
    item_name:['',Validators.required],
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
   this.Final_form =  this.fb.group({
    basic_amount:['',Validators.required],
    discount:['',Validators.required],
    gst:['',Validators.required],
    sgst:['',Validators.required],
    ro:['',Validators.required],
    net_amount:['',Validators.required],
    bill_number:['',Validators.required],
    date:['',Validators.required],
    
   })
  }

  onsubmit(){
    console.log(this.party_form.value)  
  }
  onsubm(){
    console.log(this.Item_form.value)
 
  }

  onsubmi(){
    console.log(this.Final_form.value)
  
  }
  
  
}
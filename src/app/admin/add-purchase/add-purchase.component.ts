import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';
import { UserData } from '../account/account.component';


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


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  displayedColumns: string[] = ['sn_no', 'item_name', 'pack', 'company', 'quantity', 'rate', 'discount', 'gst', 'net_rete', 'amount', 'action' ];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_form: any;
  item_form:any;
  final_form:any;
  party_data:any
  category_data: any;
  item_data: any;
  gst_data: any;
  constructor(
    private fb: FormBuilder,
    private router:Router,
    private servies:MsmsService
  ){
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
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
    discount:['',Validators.required],
    gst:['',Validators.required],
    sgst:['',Validators.required],
    ro:['',Validators.required],
    net_amount:['',Validators.required],
    bill_number:['',Validators.required],
    date:['',Validators.required],
    
   })

   this.servies.get_Party().subscribe(
    (res:any)=>{
      this.party_data = res.data
    }
   )

   this.servies.get_category().subscribe(
    (res:any)=>{
      this.category_data = res.data
    }
   )
   this.servies.get_item().subscribe(
    (res:any)=>{
      this.item_data = res.data
    }
   )

   this.servies.get_gst().subscribe(
    (res:any)=>{
      this.gst_data = res.data
    }
   )
   

  }
  onGetcat(event:any){
    this.servies.get_category_by_id(event).subscribe(
      (res:any)=>{
        console.log(res)
        this.item_form.get('cat_id')?.setValue(res.data.cat_id)
        this.item_form.get('cat_name')?.setValue(res.data.cat_name)
      }
    )
    console.log(event)
  }
  onGetgst(event:any){
    this.servies.get_gst_by_id(event).subscribe(
      (res:any)=>{
        console.log(res)
        this.item_form.get('gst_id')?.setValue(res.data.gst_id)
        this.item_form.get('cat_name')?.setValue(res.data.cat_name)
      }
    )
    console.log(event)
  }

  onGetitem(event:any){
    this.servies.get_item_by_id(event).subscribe(
      (res:any)=>{
        console.log(res)
        this.item_form.get('item_id')?.setValue(res.data.item_id)
        this.item_form.get('item')?.setValue(res.data.item_name)
        this.item_form.get('company_name')?.setValue(res.data.company)
        this.item_form.get('hsn_no')?.setValue(res.data.hsn_no)
        this.item_form.get('unit')?.setValue(res.data.unit)
        this.item_form.get('mrp')?.setValue(res.data.mrp)
        this.item_form.get('pack')?.setValue(res.data.pack)
        this.item_form.get('rate')?.setValue(res.data.item_name)
        this.item_form.get('item')?.setValue(res.data.item_name)


      }
    )
    console.log(event)
  }


  onGetParty(event:any){
    this.servies.get_party_by_id(event).subscribe(
      (res:any)=>{
        console.log(res)
        this.party_form.get('party_id')?.setValue(res.data.party_id)
        this.party_form.get('mobile_number')?.setValue(res.data.mobile)
        this.party_form.get('email_id')?.setValue(res.data.email_id)
        this.party_form.get('address')?.setValue(res.data.address)
      }
    )
    console.log(event)
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
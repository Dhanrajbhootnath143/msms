import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {
  customer_form: any
  bill_no:string ='0'
  displayedColumns: string[] = ['sn_no', 'item_name', 'pack', 'company', 'quantity', 'rate', 'discount', 'gst', 'net_rete', 'amount', 'action' ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  cust_form: any;
  item_form:any;
  final_form:any;
  party_data:any;
  category_data:any;
  item_data:any
  add_sale: any;
  cust_data:any
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
   this.cust_form = this.fb.group({
    cust_id:['', Validators.required],
    customer:['', Validators.required],
    shop_name:['', Validators.required],
    contact_number:['', Validators.required],
    email_id:['',Validators.required],
    address:['',Validators.required],
    admin_id_fk:['1',],
    bill_no:[''],
    sale_date:[new Date().toISOString().slice(0, 10),],
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
   this.servies.get_customer().subscribe(
    (res:any)=>{
      this.cust_data = res.data
    }
   )
  }

  onInsert(){
    this.servies.get_sale().subscribe(
      (dk:any)=>{
        const bill = dk.data.length + 1
          this.cust_form.get('bill_no')?.setValue("SK"+formatDate(new Date(),'yyyyMMdd','en')+bill)
          this.bill_no = ("SK"+formatDate(new Date(),'yyyyMMdd','en'))+bill 
          if(dk.sucess =1){
            if (!this.add_sale) {
              this.servies.sale_party_post(this.cust_form.value).subscribe(
                (res:any)=>{
                  console.log(res);
                  alert('Data insert succssefully')
                }
              )
            }
          }        
         }
    )
   
  }

  onsubm(){
    console.log(this.item_form.value)
 
  }

  onsubmi(){
    console.log(this.final_form.value)
  
  }

  onGetcust(event:any){
    this.servies.get_cust_by_id(event).subscribe(
      (res:any)=>{
        this.cust_form.get('cust_id')?.setValue(res.data.cust_id)
        this.cust_form.get('shop_name')?.setValue(res.data.shop_name)
        this.cust_form.get('contact_number')?.setValue(res.data.contact_number)
        this.cust_form.get('email_id')?.setValue(res.data.email_id)
        this.cust_form.get('address')?.setValue(res.data.address)
      }
    )
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

  }
  
}
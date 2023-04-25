import { Component, OnInit } from '@angular/core';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  paary_count:number=0
  unit_count:number=0
  gst_count:number=0
  weight_count:number=0
  category_count:number=0
  item_count:number=0
  employee_count:number=0
  customer_count:number=0
  purchase_count:number=0
  sale_count:number=0
  dues_count:number=0
  reciept_count:number=0
  account_count:number=0
  expense_count:number=0
  constructor(
    private services:MsmsService,
  ) { }

  ngOnInit(): void {
    this.services.get_Party().subscribe(
      (res:any)=>{
        this.paary_count = res.data.length
      }
    )
    this.services.get_unit().subscribe(
      (res:any)=>{
        this.unit_count = res.data.length
      }
    )
    this.services.get_gst().subscribe(
      (res:any)=>{
        this.gst_count = res.data.length
      }
    )
    
    this.services.get_weight().subscribe(
      (res:any)=>{
        this.weight_count = res.data.length
      }
    )

    this.services.get_category().subscribe(
      (res:any)=>{
        this.category_count = res.data.length
      }
    )
    this.services.get_item().subscribe(
      (res:any)=>{
        this.item_count = res.data.length
      }
    )
  
   this.services.get_customer().subscribe(
   (res:any)=>{
    this.customer_count = res.data.length
   } 
   )
   this.services.get_dues().subscribe(
   (res:any)=>{
    this.dues_count = res.data.length
   }
   )
   this.services.get_account().subscribe(
    (res:any)=>{
      this.account_count = res.data.length
    }
   )
   this.services.get_account().subscribe(
    (res:any)=>{
      this.account_count = res.data.length
    }
   )
  
  }

}

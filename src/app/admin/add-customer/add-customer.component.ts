import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  disableSelect = new FormControl(false);
  customer_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Submit';
  course_data:any;
  customer_upadte:string = 'Add Topic'

  constructor(
    private fb: FormBuilder,
    private Service: MsmsService,
    private route:Router,
    private matref: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public add_customer:any
  ) {}

  ngOnInit(): void {
    this.customer_form = this.fb.group({
      cust_id:[''],
      shop_name: ['', Validators.required],
      owner_name: ['',Validators.required],
      contact_number: ['', Validators.required],
      whatsapp_number:['', Validators.required],
      contact_person: ['', Validators.required],
      email_id: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    if(this.add_customer){
      console.log(this.add_customer)
      this.actionBtn='update'
      this.customer_upadte = "Update customer"
      this.customer_form.controls['cust_id'].setValue(this.add_customer.cust_id)
      this.customer_form.controls['shop_name'].setValue(this.add_customer.shop_name)
      this.customer_form.controls['owner_name'].setValue(this.add_customer.owner_name)
      this.customer_form.controls['contact_number'].setValue(this.add_customer.contact_number)
      this.customer_form.controls['whatsapp_number'].setValue(this.add_customer.whatsapp_number)
      this.customer_form.controls['contact_person'].setValue(this.add_customer.contact_person)
      this.customer_form.controls['email_id'].setValue(this.add_customer.email_id)
      this.customer_form.controls['address'].setValue(this.add_customer.address)
      this.customer_form.controls['admin_id_fk'].setValue(this.add_customer.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.customer_form.value)
    if(!this.add_customer){
    this.Service.customer_post(this.customer_form.value).subscribe(
      (res:any)=>{
        console.log(res)
        this.matref.close();
        alert('Data insert succssefully')
      },
      (error:any)=>{
        alert('Data not insert...')
      }
    )
    }
    else{
      this.update_customer()
    }
  }
  update_customer(){
    console.log(this.customer_form.value)
    this.Service.put_customer(this.customer_form.value).subscribe(
      (res:any)=>{
        console.log(res);
        alert('Data Update succssefully....')
        this.matref.close();
      },
      (error:any)=>{
        alert('Data not Update...')
      }
    )
  }
  add_customer_reset(){
    this.customer_form.reset()
    // this.customer_form.controls['shop_name'].reset()
    // this.customer_form.controls['Owner_name'].reset()
    // this.customer_form.controls['contact_number'].reset()
    // this.customer_form.controls['Contact_Person'].reset()
    // this.customer_form.controls['WhatsApp_number'].reset()
    // this.customer_form.controls['Email'].reset()
    // this.customer_form.controls['address'].reset()
  }
}
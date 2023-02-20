import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css']
})
export class AddSaleComponent implements OnInit {

  
  disableSelect = new FormControl(false);
  party_form!: FormGroup;
  item_form!:FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  add_item: any;
  add_edit_party:any;
  final_form:any;
  final_party:any;
  

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.party_form = this.fb.group({
      id: [''],
      Customer_Id: ['',],
      name: ['', Validators.required],
      Mobile_number:[''],
      Email: ['', Validators.required],
      Address:['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
      this.item_form = this.fb.group({
        id: [''],
        customer: ['', Validators.required],
        category: ['',],
        Iten: ['', Validators.required],
        Company:['', Validators.required],
        hsn_no:['',],
        Batch_no: ['', Validators.required],
        Unit: ['', Validators.required],
        mrp:['', Validators.required],
        Rate: ['', Validators.required],
        Pack:[''],
        Expiry_Dat: ['', Validators.required],
        Quantity: ['', Validators.required],
        Total: ['', Validators.required],
        Fee: ['', Validators.required],
        Discount:['',],
        gst: ['', Validators.required],
        Net_Rate: ['', Validators.required],
        Amount: ['', Validators.required],
        admin_id_fk: ['', Validators.required],
    })
    this.final_form = this.fb.group({
      id: [''],
      Basic_Amount: ['',],
      gst:[''],
      sgst: ['',],
      cgst:['',],
      Discount: ['',],
      Amount:['',],
      Blck_dues:['',],
      ro:['',],
      Total_amount:['',],
      Paid:['',],
      Dues:['',],
      Date:['',],
      admin_id_fk: ['', Validators.required],
    })
    this.party_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_edit_party){
      this.actionBtn='update'
      this.party_form.controls[ 'id'].setValue(this.add_edit_party.id)
      this.party_form.controls[ 'customer_Id'].setValue(this.add_edit_party.customer_Id)
      this.party_form.controls[ 'name'].setValue(this.add_edit_party.name)
      this.party_form.controls[ 'Mobile_number'].setValue(this.add_edit_party.Mobile_number)
      this.party_form.controls[ 'Email'].setValue(this.add_edit_party.Email)
      this.party_form.controls[ 'Address'].setValue(this.add_edit_party.Address)
      this.party_form.controls[ 'admin_id_fk'].setValue(this.add_edit_party.admin_id_fk)

      if(this.add_item){
        this.actionBtn='update'
        this.item_form.controls[ 'id'].setValue(this.add_item.id)
        this.item_form.controls[ 'customer'].setValue(this.add_item.customer)
        this.item_form.controls[ 'category'].setValue(this.add_item.category)
        this.item_form.controls[ 'Iten'].setValue(this.add_item.Iten)
        this.item_form.controls[ 'Company'].setValue(this.add_item.Company)
        this.item_form.controls[ 'hsn_no'].setValue(this.add_item.hsn_no)
        this.item_form.controls[ 'Batch_no'].setValue(this.add_item.Batch_no)
        this.item_form.controls[ 'Unit'].setValue(this.add_item.Unit)
        this.item_form.controls[ 'mrp'].setValue(this.add_item.mrp)
        this.item_form.controls[ 'Rate'].setValue(this.add_item.Rate)
        this.item_form.controls[ 'Pack'].setValue(this.add_item.Pack)
        this.item_form.controls[ 'Discount'].setValue(this.add_item.Discount)
        this.item_form.controls[ 'Expiry_Dat'].setValue(this.add_item.Expiry_Dat)
        this.item_form.controls[ 'Quantity'].setValue(this.add_item.Quantity)
        this.item_form.controls[ 'Total'].setValue(this.add_item.Total)
        this.item_form.controls[ 'Fee'].setValue(this.add_item.Fee)
        this.item_form.controls[ 'gst'].setValue(this.add_item.gst)
        this.item_form.controls[ 'Net_Rate'].setValue(this.add_item.Net_Rate)
        this.item_form.controls[ 'Amount'].setValue(this.add_item.Amount)
        this.item_form.controls[ 'admin_id_fk'].setValue(this.add_item.admin_id_fk)
      }
      if(this.final_party){
        this.actionBtn='update'
        this.final_form.controls[ 'id'].setValue(this.final_party.id)
        this.final_form.controls[ 'Basic_Amount'].setValue(this.final_party.Basic_Amount)
        this.final_form.controls[ 'gst'].setValue(this.final_party.gst)
        this.final_form.controls[ 'sgst'].setValue(this.final_party.sgst)
        this.final_form.controls[ 'cgst'].setValue(this.final_party.Address)
        this.final_form.controls[ 'Discount'].setValue(this.final_party.Discount)
        this.final_form.controls[ 'Amount'].setValue(this.final_party.Amount)
        this.final_form.controls[ 'Back_dues'].setValue(this.final_party.Back_dues)
        this.final_form.controls[ 'ro'].setValue(this.final_party.Address)
        this.final_form.controls[ 'Total_amount'].setValue(this.final_party.Total_amount)
        this.final_form.controls[ 'Paid'].setValue(this.final_party.Paid)
        this.final_form.controls[ 'Dues'].setValue(this.final_party.Dues)
        this.final_form.controls[ 'Date'].setValue(this.final_party.Date)
        this.final_form.controls[ 'admin_id_fk'].setValue(this.final_party.admin_id_fk)
      }
    }
  }
 
  }
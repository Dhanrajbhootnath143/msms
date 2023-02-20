import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {

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
      Party_Id: ['',],
      name: ['', Validators.required],
      Mobile_number:[''],
      Email: ['', Validators.required],
      Address:['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
      this.item_form = this.fb.group({
        id: [''],
        Party: ['', Validators.required],
        category: ['',],
        Iten: ['', Validators.required],
        Company:['', Validators.required],
        hsn_no:['',],
        Batch_no: ['', Validators.required],
        Unit: ['', Validators.required],
        mrp:['', Validators.required],
        Rate: ['', Validators.required],
        Pack:[''],
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
      Discount: ['',],
      gst:[''],
      sgst: ['',],
      cgst:['',],
      ro:['',],
      Net_amount:['',],
      Bill_Number:['',],
    
      admin_id_fk: ['', Validators.required],
    })
    this.party_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_edit_party){
      this.actionBtn='update'
      this.party_form.controls[ 'id'].setValue(this.add_edit_party.id)
      this.party_form.controls[ 'Party_Id'].setValue(this.add_edit_party.Party_Id)
      this.party_form.controls[ 'name'].setValue(this.add_edit_party.name)
      this.party_form.controls[ 'Mobile_number'].setValue(this.add_edit_party.Mobile_number)
      this.party_form.controls[ 'Email'].setValue(this.add_edit_party.Email)
      this.party_form.controls[ 'Address'].setValue(this.add_edit_party.Address)
      this.party_form.controls[ 'admin_id_fk'].setValue(this.add_edit_party.admin_id_fk)

      if(this.add_item){
        this.actionBtn='update'
        this.item_form.controls[ 'id'].setValue(this.add_item.id)
        this.item_form.controls[ 'Party'].setValue(this.add_item.Party)
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
        this.final_form.controls[ 'Discount'].setValue(this.final_party.Discount)
        this.final_form.controls[ 'gst'].setValue(this.final_party.gst)
        this.final_form.controls[ 'sgst'].setValue(this.final_party.sgst)
        this.final_form.controls[ 'cgst'].setValue(this.final_party.cgst)
        this.final_form.controls[ 'ro'].setValue(this.final_party.ro)
        this.final_form.controls[ 'Net_amount'].setValue(this.final_party.Net_amount)
        this.final_form.controls[ 'Bill_Number'].setValue(this.final_party.Bill_Number)
        this.final_form.controls[ 'admin_id_fk'].setValue(this.final_party.admin_id_fk)
      }
    }
  }
 
  }
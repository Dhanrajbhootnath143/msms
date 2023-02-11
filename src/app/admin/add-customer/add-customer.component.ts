import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  disableSelect = new FormControl(false);
  party_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_edit_party: any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.party_form = this.fb.group({
      shop_name: ['', Validators.required],
      Owner_name: ['',],
      contact_number: ['', Validators.required],
      WhatsApp_number:['', Validators.required],
      Contact_Person: ['', Validators.required],
      Email: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.party_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_edit_party){
      this.actionBtn='update'
      this.party_form.controls[ 'id'].setValue(this.add_edit_party.id)
      this.party_form.controls[ 'shop_name'].setValue(this.add_edit_party.name)
      this.party_form.controls[ 'Owner_name'].setValue(this.add_edit_party.Owner_name)
      this.party_form.controls[ 'contact_number'].setValue(this.add_edit_party.contact_number)
      this.party_form.controls[ 'WhatsApp_number'].setValue(this.add_edit_party.WhatsApp_number)
      this.party_form.controls[ 'Contact_Person'].setValue(this.add_edit_party.Contact_Person)
      this.party_form.controls[ 'Email'].setValue(this.add_edit_party.Email)
      this.party_form.controls[ 'address'].setValue(this.add_edit_party.enq_address)
      this.party_form.controls[ 'admin_id_fk'].setValue(this.add_edit_party.admin_id_fk)
    }
  }
}
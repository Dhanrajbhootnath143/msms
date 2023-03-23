import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-edit-party',
  templateUrl: './add-edit-party.component.html',
  styleUrls: ['./add-edit-party.component.css']
})
export class AddEditPartyComponent implements OnInit {
  disableSelect = new FormControl(false);
  party_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_edit_party: any;

  constructor(
    private fb: FormBuilder,
    private msms:MsmsService,
    private matref: MatDialogRef<AddEditPartyComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.party_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      Email: ['',Validators.required],
      Mobile: ['', Validators.required],
      WhatsApp_number:['', Validators.required],
      Contact_Person: ['', Validators.required],
      GST_Number: ['', Validators.required],
      Account_Name:['', Validators.required],
      Account_Number: ['', Validators.required],
      IFSC:['',Validators.required ],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.party_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_edit_party){
      this.actionBtn='update'
      this.party_form.controls[ 'id'].setValue(this.add_edit_party.id)
      this.party_form.controls[ 'name'].setValue(this.add_edit_party.name)
      this.party_form.controls[ 'Email'].setValue(this.add_edit_party.Email)
      this.party_form.controls[ 'Mobile'].setValue(this.add_edit_party.Mobile)
      this.party_form.controls[ 'WhatsApp_number'].setValue(this.add_edit_party.WhatsApp_number)
      this.party_form.controls[ 'Contact_Person'].setValue(this.add_edit_party.Contact_Person)
      this.party_form.controls[ 'GST_Number'].setValue(this.add_edit_party.GST_Number)
      this.party_form.controls[ 'Account_Name'].setValue(this.add_edit_party.Account_Name)
      this.party_form.controls[ 'Account_Number'].setValue(this.add_edit_party.Account_Number)
      this.party_form.controls[ 'IFSC'].setValue(this.add_edit_party.IFSC)
      this.party_form.controls[ 'address'].setValue(this.add_edit_party.enq_address)
      this.party_form.controls[ 'admin_id_fk'].setValue(this.add_edit_party.admin_id_fk)
    }
  }
  onsubmit(){
    console.log( this.party_form.value)
    console.log(this.party_form.get('name')?.value)
    console.log(this.party_form.get('Email')?.value)
    console.log(this.party_form.get('Mobile')?.value)
    console.log(this.party_form.get('WhatsApp_number')?.value)
    console.log(this.party_form.get('Contact_Person')?.value)
    console.log(this.party_form.get('GST_Number')?.value)
    console.log(this.party_form.get('Account_Name')?.value)
    console.log(this.party_form.get('Account_Number')?.value)
    console.log(this.party_form.get('IFSC')?.value)
    console.log(this.party_form.get('address')?.value)

    const partydata = new FormData()
    partydata.append('name',this.party_form.get('name')?.value)
    partydata.append('Email',this.party_form.get('Email')?.value)
    partydata.append('Mobile',this.party_form.get('Mobile')?.value)
    partydata.append('WhatsApp_number',this.party_form.get('WhatsApp_number')?.value)
    partydata.append('Contact_Person',this.party_form.get('Contact_Person')?.value)
    partydata.append('GST_Number',this.party_form.get('GST_Number')?.value)
    partydata.append('Account_Name',this.party_form.get('Account_Name')?.value)
    partydata.append('Account_Number',this.party_form.get('Account_Number')?.value)
    partydata.append('IFSC',this.party_form.get('IFSC')?.value)
    partydata.append('address',this.party_form.get('address')?.value)

  }
  party_form_reset(){
    // this.party_form.reset()/
    this.party_form.controls['name'].reset()
    this.party_form.controls['Email'].reset()
    this.party_form.controls['Mobile'].reset()
    this.party_form.controls['WhatsApp_number'].reset()
    this.party_form.controls['Contact_Person'].reset()
    this.party_form.controls['GST_Number'].reset()
    this.party_form.controls['IFSC'].reset()
    this.party_form.controls['Account_Name'].reset()
    this.party_form.controls['address'].reset()
    this.party_form.controls['Account_Number'].reset()
  }
  
}
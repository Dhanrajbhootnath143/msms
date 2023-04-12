import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  actionBtn: string = 'Submit';
  course_data: any;
  add_edit_party: any;
  party_update: string = 'Add Topic'

  constructor(
    private fb: FormBuilder,
    private service: MsmsService,
    private route: Router,
    private matref: MatDialogRef<AddEditPartyComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) {
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    this.party_form = this.fb.group({
      party_id: [''],
      party_name: ['', Validators.required],
      email_id: ['', Validators.required],
      mobile: ['', Validators.required],
      whatsapp_number: ['', Validators.required],
      contact_person: ['', Validators.required],
      gst_number: ['', Validators.required],
      account_name: ['', Validators.required],
      account_number: ['', Validators.required],
      ifsc: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })

    if (this.edit_party) {
      console.log(this.edit_party)
      this.actionBtn = "Update";
      this.party_update = "Update Party";
      this.party_form.controls['party_id'].setValue(Number(this.edit_party.party_id));
      this.party_form.controls['party_name'].setValue(this.edit_party.party_name);
      this.party_form.controls['email_id'].setValue(this.edit_party.email_id);
      this.party_form.controls['mobile'].setValue(this.edit_party.mobile);
      this.party_form.controls['whatsapp_number'].setValue(this.edit_party.whatsapp_number);
      this.party_form.controls['contact_person'].setValue(this.edit_party.contact_person);
      this.party_form.controls['gst_number'].setValue(this.edit_party.gst_number);
      this.party_form.controls['account_name'].setValue(this.edit_party.account_name);
      this.party_form.controls['account_number'].setValue(this.edit_party.account_number);
      this.party_form.controls['ifsc'].setValue(this.edit_party.ifsc);
      this.party_form.controls['address'].setValue(this.edit_party.address);
      this.party_form.controls['admin_id_fk'].setValue(this.edit_party.admin_id_fk);
    }
  }

  onsubmit() {
    console.log(this.party_form.value)
    if (!this.edit_party) {
      const formdata = new FormData();
      formdata.append('party_name', this.party_form.get('party_name')?.value);
      formdata.append('email_id', this.party_form.get('email_id')?.value);
      formdata.append('mobile', this.party_form.get('mobile')?.value);
      formdata.append('whatsapp_number', this.party_form.get('whatsapp_number')?.value);
      formdata.append('contact_person', this.party_form.get('contact_person')?.value);
      formdata.append('gst_number', this.party_form.get('gst_number')?.value);
      formdata.append('account_name', this.party_form.get('account_name')?.value);
      formdata.append('account_number', this.party_form.get('account_number')?.value);
      formdata.append('ifsc', this.party_form.get('ifsc')?.value);
      formdata.append('address', this.party_form.get('address')?.value);
      formdata.append('admin_id_fk', this.party_form.get('admin_id_fk')?.value);
      this.service.party_post(formdata).subscribe(
        (result: any) => {
          this.route.navigate(['/home/party']);
          console.log(result);
          this.matref.close();
          alert('Data insert succssefully..')
        },
        (error: any) => {
          alert('Data not insert..')
        }
      )
    }
    else{
      this.update_party()
    }
  }

  update_party(){
    console.log(this.party_form.value)
    this.service.put_party(this.party_form.value).subscribe(
      (result:any) => {
        console.log(result)
        alert('Data Update Successfully...')
        this.matref.close();
      },
      (error:any) => {
        alert('Data not update')
      }
    )
  }

  party_form_reset() {
    this.party_form.reset()
  }
}
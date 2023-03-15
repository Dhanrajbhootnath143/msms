import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  disableSelect = new FormControl(false);
  employee_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_employee_party: any;
  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.employee_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      Email: ['',Validators.required],
      mobile_number: ['', Validators.required],
      WhatsApp_number:['', Validators.required],
      Aadhar_number: ['', Validators.required],
      GST_Number: ['', Validators.required],
      Account_Name:['', Validators.required],
      Account_Number: ['', Validators.required],
      IFSC:['',Validators.required],
      photo: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.employee_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_employee_party){
      this.actionBtn='update'
      this.employee_form.controls[ 'id'].setValue(this.add_employee_party.id)
      this.employee_form.controls[ 'name'].setValue(this.add_employee_party.name)
      this.employee_form.controls[ 'Email'].setValue(this.add_employee_party.Email)
      this.employee_form.controls[ 'mobile_number'].setValue(this.add_employee_party.mobile_number)
      this.employee_form.controls[ 'WhatsApp_number'].setValue(this.add_employee_party.WhatsApp_number)
      this.employee_form.controls[ 'Aadhar_number'].setValue(this.add_employee_party.Aadhar_number)
      this.employee_form.controls[ 'GST_Number'].setValue(this.add_employee_party.GST_Number)
      this.employee_form.controls[ 'Account_Name'].setValue(this.add_employee_party.Account_Name)
      this.employee_form.controls[ 'Account_Number'].setValue(this.add_employee_party.Account_Number)
      this.employee_form.controls[ 'IFSC'].setValue(this.add_employee_party.IFSC)
      this.employee_form.controls[ 'photo'].setValue(this.add_employee_party.photo)
      this.employee_form.controls[ 'address'].setValue(this.add_employee_party.enq_address)
      this.employee_form.controls[ 'admin_id_fk'].setValue(this.add_employee_party.admin_id_fk)
    }
  }
  OnUpload(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      this.employee_form.get('photo')?.setValue(file)
    }
  }
  employee_form_reset(){
    this.employee_form.reset()
  }
}
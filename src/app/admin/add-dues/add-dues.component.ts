import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dues',
  templateUrl: './add-dues.component.html',
  styleUrls: ['./add-dues.component.css']
})
export class AddDuesComponent implements OnInit {

  disableSelect = new FormControl(false);
  dues_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_dues: any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddDuesComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.dues_form = this.fb.group({
      id: [''],
      Customer_Name: ['', Validators.required],
      Pey: ['', Validators.required],
      Bil_lnumber: ['', Validators.required],
      Current_dues:['', Validators.required],
      Back_dues: ['', Validators.required],
      Date: ['', Validators.required],

      admin_id_fk: ['', Validators.required],
    })
    this.dues_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_dues){
      this.actionBtn='update'
      this.dues_form.controls[ 'id'].setValue(this.add_dues.id)
      this.dues_form.controls[ 'Customer_Name'].setValue(this.add_dues.Customer_Name)
      this.dues_form.controls[ 'Pey'].setValue(this.add_dues.Pey)
      this.dues_form.controls[ 'Bil_lnumber'].setValue(this.add_dues.Bil_lnumber)
      this.dues_form.controls[ 'Current_dues'].setValue(this.add_dues.Current_dues)
      this.dues_form.controls[ 'Back_dues'].setValue(this.add_dues.Back_dues)
      this.dues_form.controls[ 'Date'].setValue(this.add_dues.Date)
      this.dues_form.controls[ 'admin_id_fk'].setValue(this.add_dues.admin_id_fk)
    }
  }
}
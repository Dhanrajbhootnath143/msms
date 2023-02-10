import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.css']
})
export class AddWeightComponent implements OnInit {
  disableSelect = new FormControl(false);
  party_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_unit: any;
  Weight_form: any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddWeightComponent>,
    @Inject(MAT_DIALOG_DATA) public add_weight: any
  ) { }

  ngOnInit(): void {
    this.Weight_form = this.fb.group({
      id: [''],
      Weight: ['', Validators.required],
      Description: ['',],
   
      admin_id_fk: ['', Validators.required],
    })
    this.Weight_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_weight){
      this.actionBtn='update'
      this.Weight_form.controls[ 'id'].setValue(this.add_weight.id)
      this.Weight_form.controls[ 'Weight'].setValue(this.add_weight.Weight)
      this.Weight_form.controls[ 'Description'].setValue(this.add_weight.Description)

      this.Weight_form.controls[ 'admin_id_fk'].setValue(this.add_weight.admin_id_fk)
    }
  }
}

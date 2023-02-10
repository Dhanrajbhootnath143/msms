import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  disableSelect = new FormControl(false);
  Category_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_category: any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) publicadd_category: any
  ) { }

  ngOnInit(): void {
    this.Category_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      Description: ['',],
   
      admin_id_fk: ['', Validators.required],
    })
    this.Category_form.controls['add_category'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_category){
      this.actionBtn='update'
      this.Category_form.controls[ 'id'].setValue(this.add_category.id)
      this.Category_form.controls[ 'name'].setValue(this.add_category.name)
      this.Category_form.controls[ 'Description'].setValue(this.add_category.Description)

      this.Category_form.controls[ 'admin_id_fk'].setValue(this.add_category.admin_id_fk)
    }
  }
}

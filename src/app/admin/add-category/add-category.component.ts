import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  disableSelect = new FormControl(false);
  category_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Submit';
  course_data:any;
  category_update: string = 'Add Topic'

  constructor(
    private fb: FormBuilder,
    private Service:MsmsService,
    private matref: MatDialogRef<AddCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public add_category: any
  ) { }

  ngOnInit(): void {
    this.category_form = this.fb.group({
      cat_id: [''],
      cat_name: ['', Validators.required],
      description: [''],
      admin_id_fk: ['', Validators.required],
    })
    if(this.add_category){
      console.log(this.add_category)
      this.actionBtn='Update'
      this.category_update = "Update category";
      this.category_form.controls[ 'cat_id'].setValue(this.add_category.cat_id)
      this.category_form.controls[ 'cat_name'].setValue(this.add_category.cat_name)
      this.category_form.controls[ 'description'].setValue(this.add_category.description)
      this.category_form.controls[ 'admin_id_fk'].setValue(this.add_category.admin_id_fk)
    }
  }
  onsubmit(){
    if (!this.add_category) {
      this.Service.category_post(this.category_form.value).subscribe(
        (res:any)=>{
          console.log(res);
          this.matref.close();
          alert('Data insert succssefully')
        },
        (error:any)=>{
          alert('Data not insert...')
        }
      )
    }
    else{
      this.update_catogory()
    }
  }
  update_catogory(){
      console.log(this.category_form.value)
      this.Service.put_category(this.category_form.value).subscribe(
        (res:any)=>{
          console.log(res);
          alert('Data Update succssefully...')
          this.matref.close();
        },
        (error:any)=>{
          alert('Data not Update...')
        }
      )
    }
  add_category_reset(){
    this.category_form.reset()
    // this.Category_form.controls['name'].reset()
    // this.Category_form.controls['Description'].reset()
  }
}

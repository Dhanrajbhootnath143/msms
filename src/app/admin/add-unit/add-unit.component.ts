import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { count } from 'rxjs';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  disableSelect = new FormControl(false);
  unit_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Submit';
  add_unit: any;
  unit_update: string = 'Add Topic'

  constructor(
    private fb: FormBuilder,
    private service: MsmsService,
    private matref: MatDialogRef<AddUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_unit: any

  ) { }

  ngOnInit(): void {
    this.unit_form = this.fb.group({
      unit_id: [''],
      unit_name: ['', Validators.required],
      unit_desc: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })

    if(this.edit_unit){
      console.log(this.edit_unit)
      this.actionBtn = "Update"
      this.unit_update = "Update Unit";
      this.unit_form.controls['unit_id'].setValue(Number(this.edit_unit.unit_id));
      this.unit_form.controls['unit_name'].setValue(this.edit_unit.unit_name);
      this.unit_form.controls['unit_desc'].setValue(this.edit_unit.unit_desc);
      this.unit_form.controls['admin_id_fk'].setValue(this.edit_unit.admin_id_fk);
    }
  }

  onsubmit() {
    if (!this.add_unit) {
      this.service.unit_post(this.unit_form.value).subscribe(
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
      this.update_unit()
    }
  }
  
  update_unit(){
    console.log(this.unit_form.value)
    this.service.put_party(this.unit_form.value).subscribe(
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
  

  add_unit_reset() {
    this.unit_form.reset()
    // this.Unit_form.controls['unit_name'].reset()
    // this.Unit_form.controls['unit_desc'].reset()
  }
}

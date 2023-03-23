import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';



@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {
 
  disableSelect = new FormControl(false);
  Unit_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_unit: any;

  constructor(
    private fb: FormBuilder,
    private msms :MsmsService,
    private matref: MatDialogRef<AddUnitComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any

  ) { }

  ngOnInit(): void {
    this.Unit_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      Description: ['',],
   
      admin_id_fk: ['', Validators.required],
    })
    this.Unit_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_unit){
      this.actionBtn='update'
      this.Unit_form.controls[ 'id'].setValue(this.add_unit.id)
      this.Unit_form.controls[ 'name'].setValue(this.add_unit.name)
      this.Unit_form.controls[ 'Description'].setValue(this.add_unit.Description)

      this.Unit_form.controls[ 'admin_id_fk'].setValue(this.add_unit.admin_id_fk)
    }
  }

  add_unit_reset(){
    // this.Unit_form.reset()
    this.Unit_form.controls['name'].reset()
    this.Unit_form.controls['Description'].reset()
  }
  onsubmit(){
    // console.log( this.Unit_form.value)
    console.log(this.Unit_form.get('name')?.value)
    console.log(this.Unit_form.get('Description')?.value)

    
    const unitdata = new FormData()
    unitdata.append('name',this.Unit_form.get('name')?.value)
    unitdata.append('Description',this.Unit_form.get('Description')?.value)

    // this.msms.unit(unitdata).subscribe(
    //   (result:any)=>{
    //     console.log(result)
    //   }
    // )

    

    
  }
}

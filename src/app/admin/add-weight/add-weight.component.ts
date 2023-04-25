import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';

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
  actionBtn: string = 'Submit';
  course_data:any;
  add_unit: any;
  Weight_form: any;
  weight_update: string = 'Add Topic'

  constructor(
    private fb: FormBuilder,
    private Service :MsmsService,
    private router :Router,
    private matref: MatDialogRef<AddWeightComponent>,
    @Inject(MAT_DIALOG_DATA) public add_weight: any
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.Weight_form = this.fb.group({
      weight_id: [''],
      weight: ['', Validators.required],
      description: ['',],
      admin_id_fk: ['', Validators.required],
    })
    
    if(this.add_weight){
      console.log(this.add_weight)
      this.actionBtn='update'
      this.weight_update = "Update weight";
      this.Weight_form.controls[ 'weight_id'].setValue(this.add_weight.weight_id)
      this.Weight_form.controls[ 'weight'].setValue(this.add_weight.weight)
      this.Weight_form.controls[ 'description'].setValue(this.add_weight.description)
      this.Weight_form.controls[ 'admin_id_fk'].setValue(this.add_weight.admin_id_fk)
    }
  }
  onsubmit(){
  if (!this.add_weight) {
      this.Service.weight_post(this.Weight_form.value).subscribe(
        (res:any)=>{
          this.router.navigate(['/home/weight'])
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
      console.log(this.Weight_form.value)
      this.Service.put_weight(this.Weight_form.value).subscribe(
        (res:any)=>{
          this.router.navigate(['/home/weight'])
          console.log(res);
          alert('Data Update succssefully...')
          this.matref.close();
        },
        (error:any)=>{
          alert('Data not Update...')
        }
      )
    }
  add_weight_reset(){
    this.Weight_form.reset()
    // this.Weight_form.controls['weight'].reset()
    // this.Weight_form.controls['description'].reset()
    

  }

}

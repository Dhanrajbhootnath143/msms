import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';

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
  actionBtn: string = 'Submit';
  course_data:any;
  dues_update: string ='Add Topic'

  constructor(
    private fb: FormBuilder,
    private service : MsmsService,
    private matref: MatDialogRef<AddDuesComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) public add_dues: any
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
   }

  ngOnInit(): void {
    this.dues_form = this.fb.group({
      dues_id: [''],
      customer_name: ['', Validators.required],
      pey: ['', Validators.required],
      bill_number: ['', Validators.required],
      current_dues:['', Validators.required],
      back_dues: ['', Validators.required],
      date: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    if(this.add_dues){
      console.log(this.add_dues)
      this.actionBtn='Update'
      this.dues_update="Update gst"
      this.dues_form.controls['dues_id'].setValue(this.add_dues.dues_id)
      this.dues_form.controls['customer_name'].setValue(this.add_dues.customer_name)
      this.dues_form.controls['pey'].setValue(this.add_dues.pey)
      this.dues_form.controls['bill_number'].setValue(this.add_dues.bill_number)
      this.dues_form.controls['current_dues'].setValue(this.add_dues.current_dues)
      this.dues_form.controls['back_dues'].setValue(this.add_dues.back_dues)
      this.dues_form.controls['date'].setValue(this.add_dues.date)
      this.dues_form.controls['admin_id_fk'].setValue(this.add_dues.admin_id_fk)
    }
  }
  onsubmit(){
    if (!this.add_dues) {
      this.service.dues_post(this.dues_form.value).subscribe(
        (res:any)=>{
          this.router.navigate(['/home/duse'])
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
      this.update_dues()
    }
    // console.log(this.dues_form.get('customer_name')?.value)
    // console.log(this.dues_form.get('Pey')?.value)
    // console.log(this.dues_form.get('Bill_number')?.value)
    // console.log(this.dues_form.get('Current_dues')?.value)
    // console.log(this.dues_form.get('Back_dues')?.value)
    // console.log(this.dues_form.get('date')?.value)
   
  }
  
  update_dues(){
    console.log(this.dues_form.value)
    this.service.put_dues(this.dues_form.value).subscribe(
      (res:any)=>{
        this.router.navigate(['/home/dues']);
        console.log(res);
        alert('Data Update succssefully...')
        this.matref.close();
      },
      (error:any)=>{
        console.log(error)
        alert('Data not Update...')
      }
    )
  }
  add_dues_reset(){
    this.dues_form.reset()
    // this.dues_form.controls['Customer_Name'].reset()
    // this.dues_form.controls['Pey'].reset()
    // this.dues_form.controls['Bill_number'].reset()
    // this.dues_form.controls['Current_dues'].reset()
    // this.dues_form.controls['Back_dues'].reset()
    // this.dues_form.controls['date'].reset()

  }
}
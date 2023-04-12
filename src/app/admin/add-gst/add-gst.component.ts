import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';


@Component({
  selector: 'app-add-gst',
  templateUrl: './add-gst.component.html',
  styleUrls: ['./add-gst.component.css']
})
export class AddGstComponent implements OnInit {
  disableSelect = new FormControl(false);
  gst_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Submit';
  course_data:any;
  // add_gst: any;
  gst_update: string = 'Add Topic'

  constructor(
    @Inject(MAT_DIALOG_DATA) public add_gst: any,
    private fb: FormBuilder,
    private service:MsmsService,
    private matref: MatDialogRef<AddGstComponent>,
    private router:Router

  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.gst_form = this.fb.group({
      gst_id: [''],
      gst: ['', Validators.required],
      cgst: ['', Validators.required],
      sgst: ['', Validators.required],
      description: [''],
      admin_id_fk: [''],
    })
    if(this.add_gst){
      console.log(this.add_gst)
      this.actionBtn='Update'
      this.gst_update = "Update gst";
      this.gst_form.controls['gst_id'].setValue(this.add_gst.gst_id)
      this.gst_form.controls['gst'].setValue(this.add_gst.gst)
      this.gst_form.controls['cgst'].setValue(this.add_gst.cgst)
      this.gst_form.controls['sgst'].setValue(this.add_gst.sgst)
      this.gst_form.controls['description'].setValue(this.add_gst.description)
      this.gst_form.controls['admin_id_fk'].setValue(this.add_gst.admin_id_fk)
    }
  }

  onsubmit(){
    if (!this.add_gst) {
      this.service.gst_post(this.gst_form.value).subscribe(
        (res:any)=>{
          console.log(res);
          this.matref.close();
          alert('Data insert succssefully')
          this.router.navigate(['/home/gst'])
        },
        (error:any)=>{
          alert('Data not insert...')
        }
      )
    }
    else{
      this.update_gst()
    }
  }


    update_gst(){
      console.log(this.gst_form.value)
      this.service.put_gst(this.gst_form.value).subscribe(
        (res:any)=>{
          this.router.navigate(['/home/gst'])
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
    // console.log(this.gst_form.value)
    // console.log(this.gst_form.get('gst')?.value)
    // console.log(this.gst_form.get('cgst')?.value)
    // console.log(this.gst_form.get('sgst')?.value)
    // console.log(this.gst_form.get('Description')?.value)

    // const gstdata = new FormData()
    // gstdata.append('gst',this.gst_form.get('gst')?.value)
    // gstdata.append('cgst',this.gst_form.get('cgst')?.value)
    // gstdata.append('sgst',this.gst_form.get('sgst')?.value)
    // gstdata.append('Description',this.gst_form.get('Description')?.value)



  add_gst_reset(){
    this.gst_form.reset()
    // this.gst_form.controls['gst'].reset()
    // this.gst_form.controls['cgst'].reset()
    // this.gst_form.controls['sgst'].reset()
    // this.gst_form.controls['Description'].reset()
  }

  }


import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';


@Component({
  selector: 'app-add-gst',
  templateUrl: './add-gst.component.html',
  styleUrls: ['./add-gst.component.css']
})
export class AddGstComponent implements OnInit {
  disableSelect = new FormControl(false);
  party_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_gst: any;
  gst_form: any;

  constructor(
    private fb: FormBuilder,
    private msms:MsmsService,
    private matref: MatDialogRef<AddGstComponent>,
    @Inject(MAT_DIALOG_DATA) publicgst_form: any
  ) { }

  ngOnInit(): void {
    this.gst_form = this.fb.group({
      id: [''],
      gst: ['', Validators.required],
      cgst: ['', Validators.required],
      sgst: ['', Validators.required],
      Description: ['',],
   
      admin_id_fk: ['', Validators.required],
    })
    this.gst_form.controls['add_gst'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_gst){
      this.actionBtn='update'
      this.gst_form.controls[ 'id'].setValue(this.add_gst.id)
      this.gst_form.controls[ 'gst'].setValue(this.add_gst.gst)
      this.gst_form.controls[ 'cgst'].setValue(this.add_gst.cgst)
      this.gst_form.controls[ 'sgst'].setValue(this.add_gst.sgst)
      this.gst_form.controls[ 'Description'].setValue(this.add_gst.Description)
      this.gst_form.controls[ 'admin_id_fk'].setValue(this.add_gst.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.gst_form.value)
    console.log(this.gst_form.get('gst')?.value)
    console.log(this.gst_form.get('cgst')?.value)
    console.log(this.gst_form.get('sgst')?.value)
    console.log(this.gst_form.get('Description')?.value)

    const gstdata = new FormData()
    gstdata.append('gst',this.gst_form.get('gst')?.value)
    gstdata.append('cgst',this.gst_form.get('cgst')?.value)
    gstdata.append('sgst',this.gst_form.get('sgst')?.value)
    gstdata.append('Description',this.gst_form.get('Description')?.value)



  }
  add_gst_reset(){
    // this.gst_form.reset()
    this.gst_form.controls['gst'].reset()
    this.gst_form.controls['cgst'].reset()
    this.gst_form.controls['sgst'].reset()
    this.gst_form.controls['Description'].reset()

  }
}

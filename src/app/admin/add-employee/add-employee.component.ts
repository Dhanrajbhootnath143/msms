import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  disableSelect = new FormControl(false);
  employee_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_employee_party: any;
  employee_update: string = 'Add Topic'
  image_url:any= "assets/logo.png";
  image_select:any
  constructor(
    private fb: FormBuilder,
    private Service: MsmsService,
    private route:Router,
    private matref: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { 
    this.route.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    this.employee_form = this.fb.group({
      emp_id: [''],
      emp_name: ['', Validators.required],
      email_id: ['',Validators.required],
      mobile: ['', Validators.required],
      whatsapp_number:['', Validators.required],
      aadhar_number: ['', Validators.required],
      account_name:['', Validators.required],
      account_number: ['', Validators.required],
      ifsc:['',Validators.required],
      photo: ['', Validators.required],
      address: ['', Validators.required],
      description:[''],
      admin_id_fk: ['', Validators.required],
    })
    if(this.add_employee_party){
      console.log(this.add_employee_party)
      this.actionBtn='Update'
      this.employee_update = "Update employee"
      this.employee_form.controls[ 'emp_id'].setValue(this.add_employee_party.emp_id)
      this.employee_form.controls[ 'emp_name'].setValue(this.add_employee_party.emp_name)
      this.employee_form.controls[ 'email_id'].setValue(this.add_employee_party.email_id)
      this.employee_form.controls[ 'mobile'].setValue(this.add_employee_party.Mobile)
      this.employee_form.controls[ 'whatsapp_number'].setValue(this.add_employee_party.whatsapp_number)
      this.employee_form.controls[ 'aadhar_number'].setValue(this.add_employee_party.aadhar_number)
      this.employee_form.controls[ 'account_name'].setValue(this.add_employee_party.account_name)
      this.employee_form.controls[ 'account_number'].setValue(this.add_employee_party.account_number)
      this.employee_form.controls[ 'ifsc'].setValue(this.add_employee_party.ifsc)
      this.employee_form.controls[ 'photo'].setValue(this.add_employee_party.photo)
      this.employee_form.controls[ 'address'].setValue(this.add_employee_party.enq_address)
      this.employee_form.controls['description'].setValue(this.add_employee_party.description)
      this.employee_form.controls[ 'admin_id_fk'].setValue(this.add_employee_party.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.employee_form.value)
    if (!this.add_employee_party) {
    const employeedata = new FormData()
    employeedata.append('emp_name',this.employee_form.get('emp_name')?.value)
    employeedata.append('email_id',this.employee_form.get('email_id')?.value)
    employeedata.append('mobile',this.employee_form.get('mobile')?.value)
    employeedata.append('whatsapp_number',this.employee_form.get('whatsapp_number')?.value)
    employeedata.append('aadhar_number',this.employee_form.get('aadhar_number')?.value)
    employeedata.append('account_number',this.employee_form.get('account_number')?.value)
    employeedata.append('ifsc',this.employee_form.get('ifsc')?.value)
    employeedata.append('account_name',this.employee_form.get('account_Name')?.value)
    employeedata.append('address',this.employee_form.get('address')?.value)
    employeedata.append('description',this.employee_form.get('description')?.value)
    employeedata.append('photo',this.image_select)
    employeedata.append('admin_id_fk',this.employee_form.get('admin_id_fk')?.value)

    this.Service.employee_post(employeedata).subscribe(
      (result: any) => {
        this.route.navigate(['/home/employee']);
        console.log(result);
        this.matref.close();
        alert('Data insert succssefully..')
      },
      (error: any) => {
        alert('Data not insert..')
        console.log(error)
      }
    )
  }
}

  OnUpload(files:any){
    if(files.length === 0){
      return;
    }
    let mimeType = files[0].type;
    console.log(mimeType)
    if(mimeType.match(/image\/*/) == null){
      console.log("Only Image are Supported.");
      return;
    }
    let reader = new FileReader();
    this.image_select = files[0];
    reader.onload = () =>{
      this.image_url = reader.result
    };
    reader.readAsDataURL(this.image_select);
  }
  employee_form_reset(){
    this.employee_form.reset()
    // this.employee_form.controls['name'].reset()
    // this.employee_form.controls['Email'].reset()
    // this.employee_form.controls['Mobile'].reset()
    // this.employee_form.controls['WhatsApp_number'].reset()
    // this.employee_form.controls['Aadhar_number'].reset()
    // this.employee_form.controls['Account_Number'].reset()
    // this.employee_form.controls['IFSC'].reset()
    // this.employee_form.controls['Account_Name'].reset()
    // this.employee_form.controls['address'].reset()
    // this.employee_form.controls['Description'].reset()
    // this.employee_form.controls['photo'].reset()
  }
}
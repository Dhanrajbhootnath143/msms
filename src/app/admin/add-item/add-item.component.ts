import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  disableSelect = new FormControl(false);
  item_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Submit';
  item_update: string = 'Add Topic'
  constructor(
    private fb: FormBuilder,
    private Service: MsmsService,
    private router:Router,
    private matref: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public add_item: any
  ) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.item_form = this.fb.group({
      item_id: [''],
      item_name: ['', Validators.required],
      weight: ['', Validators.required],
      purchase_amount: ['', Validators.required],
      company:['', Validators.required],
      pack: ['', Validators.required],
      sale_amount: ['', Validators.required],
      category:['', Validators.required],
      hsn_no: ['',Validators.required],
      unit:['',Validators.required],
      mrp: ['', Validators.required],
      description:[''],
      admin_id_fk: ['', Validators.required],
    })
    if(this.add_item){
      console.log(this.add_item)
      this.actionBtn='Update'
      this.item_update = "Update item"
      this.item_form.controls['item_id'].setValue(this.add_item.item_id)
      this.item_form.controls['item_name'].setValue(this.add_item.item_name)
      this.item_form.controls['weight'].setValue(this.add_item.weight)
      this.item_form.controls['purchase_amount'].setValue(this.add_item.purchase_amount)
      this.item_form.controls['company'].setValue(this.add_item.company)
      this.item_form.controls['pack'].setValue(this.add_item.pack)
      this.item_form.controls['sale_amount'].setValue(this.add_item.sale_amount)
      this.item_form.controls['category'].setValue(this.add_item.category)
      this.item_form.controls['hsn_no'].setValue(this.add_item.hsn_no)
      this.item_form.controls['unit'].setValue(this.add_item.unit)
      this.item_form.controls['mrp'].setValue(this.add_item.mrp)
      this.item_form.controls['description'].setValue(this.add_item.description)
      this.item_form.controls['admin_id_fk'].setValue(this.add_item.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.item_form.value)
    if (!this.add_item) {
      this.Service.item_post(this.item_form.value).subscribe(
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
      this.update_item()
    }
  }
  update_item(){
    console.log(this.item_form.value)
    this.Service.put_item(this.item_form.value).subscribe(
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
  

  add_item_reset(){
    this.item_form.reset()
    // this.item_form.controls['category'].reset()
    // this.item_form.controls['item_name'].reset()
    // this.item_form.controls['company'].reset()
    // this.item_form.controls['unit'].reset()
    // this.item_form.controls['weight'].reset()
    // this.item_form.controls['pack'].reset()
    // this.item_form.controls['hsn_no'].reset()
    // this.item_form.controls['mrp'].reset()
    // this.item_form.controls['purchase_amount'].reset()
    // this.item_form.controls['sale_amount'].reset()
    // this.item_form.controls['description'].reset()

  }
}
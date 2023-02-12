import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
  actionBtn: string = 'Add';
  course_data:any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public add_item: any
  ) { }

  ngOnInit(): void {
    this.item_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      weight: ['',],
      Purchase_amount: ['', Validators.required],
      Company:['', Validators.required],
      Pack: ['', Validators.required],
      Sale_amount: ['', Validators.required],
      category:['', Validators.required],
      hsn_no: ['', Validators.required],
      Unit:[''],
      mrp: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.item_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_item){
      this.actionBtn='update'
      this.item_form.controls[ 'id'].setValue(this.add_item.id)
      this.item_form.controls[ 'name'].setValue(this.add_item.name)
      this.item_form.controls[ 'weight'].setValue(this.add_item.weight)
      this.item_form.controls[ 'Purchase_amount'].setValue(this.add_item.Purchase_amount)
      this.item_form.controls[ 'Company'].setValue(this.add_item.Company)
      this.item_form.controls[ 'Pack'].setValue(this.add_item.Pack)
      this.item_form.controls[ 'Sale_amount'].setValue(this.add_item.Sale_amount)
      this.item_form.controls[ 'category'].setValue(this.add_item.category)
      this.item_form.controls[ 'hsn_no'].setValue(this.add_item.hsn_no)
      this.item_form.controls[ 'Unit'].setValue(this.add_item.Unit)
      this.item_form.controls[ 'mrp'].setValue(this.add_item.mrp)
      this.item_form.controls[ 'admin_id_fk'].setValue(this.add_item.admin_id_fk)
    }
  }
}
import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  actionBtn: string = 'Add';
  course_data:any;

  constructor(
    private fb: FormBuilder,
    private msms: MsmsService,
    private matref: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public add_item: any
  ) { }

  ngOnInit(): void {
    this.item_form = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      weight: ['', Validators.required],
      Purchase_amount: ['', Validators.required],
      Company:['', Validators.required],
      Pack: ['', Validators.required],
      Sale_amount: ['', Validators.required],
      category:['', Validators.required],
      hsn_no: ['',Validators.required],
      Unit:['',Validators.required],
      mrp: ['', Validators.required],
      Description:['',],
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
      this.item_form.controls[ 'Description'].setValue(this.add_item.Description)
      this.item_form.controls[ 'admin_id_fk'].setValue(this.add_item.admin_id_fk)
    }
  }
  onsubmit(){
    // console.log(this.item_form.value)
    console.log(this.item_form.get('category')?.value)
    console.log(this.item_form.get('name')?.value)
    console.log(this.item_form.get('Company')?.value)
    console.log(this.item_form.get('weight')?.value)
    console.log(this.item_form.get('Unit')?.value)
    console.log(this.item_form.get('Pack')?.value)
    console.log(this.item_form.get('hsn_no')?.value)
    console.log(this.item_form.get('mrp')?.value)
    console.log(this.item_form.get('Purchase_amount')?.value)
    console.log(this.item_form.get('Sale_amount')?.value)
    console.log(this.item_form.get('Description')?.value)

    const itemdata = new FormData()
    itemdata.append('category',this.item_form.get('category')?.value)
    itemdata.append('name',this.item_form.get('name')?.value)
    itemdata.append('Company',this.item_form.get('Company')?.value)
    itemdata.append('weight',this.item_form.get('weight')?.value)
    itemdata.append('Unit',this.item_form.get('Unit')?.value)
    itemdata.append('Pack',this.item_form.get('Pack')?.value)
    itemdata.append('hsn_no',this.item_form.get('hsn_no')?.value)
    itemdata.append('mrp',this.item_form.get('mrp')?.value)
    itemdata.append('Purchase_amount',this.item_form.get('Purchase_amount')?.value)
    itemdata.append('Sale_amount',this.item_form.get('Sale_amount')?.value)
    itemdata.append('Description',this.item_form.get('Description')?.value)


  }
  add_item_reset(){
    // this.item_form.reset()
    this.item_form.controls['category'].reset()
    this.item_form.controls['name'].reset()
    this.item_form.controls['Company'].reset()
    this.item_form.controls['Unit'].reset()
    this.item_form.controls['weight'].reset()
    this.item_form.controls['Pack'].reset()
    this.item_form.controls['hsn_no'].reset()
    this.item_form.controls['mrp'].reset()
    this.item_form.controls['Purchase_amount'].reset()
    this.item_form.controls['Sale_amount'].reset()
    this.item_form.controls['Description'].reset()

  }
}
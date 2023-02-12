import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
	active = 1;
  disableSelect = new FormControl(false);
  item_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_item: any;
  p:any
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.item_form = this.fb.group({
      id: [''],
      Party_Id: ['',],
      name: ['', Validators.required],
      Email: ['', Validators.required],
      Address:['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.item_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_item){
      this.actionBtn='update'
      this.item_form.controls[ 'id'].setValue(this.add_item.id)
      this.item_form.controls[ 'Party_Id'].setValue(this.add_item.Party_Id)
      this.item_form.controls[ 'name'].setValue(this.add_item.name)
      this.item_form.controls[ 'Email'].setValue(this.add_item.Email)
      this.item_form.controls[ 'Address'].setValue(this.add_item.Address)
      this.item_form.controls[ 'admin_id_fk'].setValue(this.add_item.admin_id_fk)
    }
  }
}
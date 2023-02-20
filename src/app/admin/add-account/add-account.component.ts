import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {
  disableSelect = new FormControl(false);
  account_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  
  add_account: any;

  constructor(
    private fb: FormBuilder,
    private matref: MatDialogRef<AddAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.account_form = this.fb.group({
      id: [''],
      cash: ['', Validators.required],
      Deposit: ['',],
      Today_Sale: ['', Validators.required],
      Closeing_Amount:['', Validators.required],
      Expense: ['', Validators.required],
      Remarks: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.account_form.controls['add_account'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_account){
      this.actionBtn='update'
      this.account_form.controls[ 'id'].setValue(this.add_account.id)
      this.account_form.controls[ 'cash'].setValue(this.add_account.cash)
      this.account_form.controls[ 'Deposit'].setValue(this.add_account.Deposit)
      this.account_form.controls[ 'Today_Sale'].setValue(this.add_account.Today_Sale)
      this.account_form.controls[ 'Closeing_Amount'].setValue(this.add_account.Closeing_Amount)
      this.account_form.controls[ 'Expense'].setValue(this.add_account.Expense)
      this.account_form.controls[ 'Remarks'].setValue(this.add_account.Remarks)
      this.account_form.controls[ 'admin_id_fk'].setValue(this.add_account.admin_id_fk)
    }
  }
}
import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  disableSelect = new FormControl(false);
  expense_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  
  add_expense: any;

  constructor(
    private fb: FormBuilder,
    private msms : MsmsService,
    private matref: MatDialogRef<AddExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.expense_form = this.fb.group({
      id: [''],
      cash: ['', Validators.required],
      Expense_Type:['',Validators.required],
      Deposit: ['',],
      Today_Sale: ['', Validators.required],
      Closeing_Amount:['', Validators.required],
      Expense: ['', Validators.required],
      Remarks: ['', Validators.required],
      date:[''],
      admin_id_fk: ['', Validators.required],
    })
    this.expense_form.controls['add_account'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_expense){
      this.actionBtn='update'
      this.expense_form.controls[ 'id'].setValue(this.add_expense.id)
      this.expense_form.controls['Expense_Type'].setValue(this.add_expense.Expense_Type)
      this.expense_form.controls[ 'cash'].setValue(this.add_expense.cash)
      this.expense_form.controls[ 'Deposit'].setValue(this.add_expense.Deposit)
      this.expense_form.controls[ 'Today_Sale'].setValue(this.add_expense.Today_Sale)
      this.expense_form.controls[ 'Closeing_Amount'].setValue(this.add_expense.Closeing_Amount)
      this.expense_form.controls[ 'Expense'].setValue(this.add_expense.Expense)
      this.expense_form.controls[ 'Remarks'].setValue(this.add_expense.Remarks)
      this.expense_form.controls['date'].setValue(this.add_expense.date)
      this.expense_form.controls[ 'admin_id_fk'].setValue(this.add_expense.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.expense_form.value)
    console.log(this.expense_form.get('cash')?.value)
    console.log(this.expense_form.get('Expense_Type')?.value)
    console.log(this.expense_form.get('Deposit')?.value)
    console.log(this.expense_form.get('Today_Sale')?.value)
    console.log(this.expense_form.get('Closeing_Amount')?.value)
    console.log(this.expense_form.get('Expense')?.value)
    console.log(this.expense_form.get('Remarks')?.value)
    console.log(this.expense_form.get('date')?.value)

    const expensedata = new FormData()
    expensedata.append('cash',this.expense_form.get('cash')?.value)
    expensedata.append('Expense_Type',this.expense_form.get('Expense_Type')?.value)
    expensedata.append('Deposit',this.expense_form.get('Deposit')?.value)
    expensedata.append('Today_Sale',this.expense_form.get('Today_Sale')?.value)
    expensedata.append('Closeing_Amount',this.expense_form.get('Closeing_Amount')?.value)
    expensedata.append('Expense',this.expense_form.get('Expense')?.value)
    expensedata.append('Remarks',this.expense_form.get('Remarks')?.value)
    expensedata.append('date',this.expense_form.get('date')?.value)


  }
  add_expense_reset(){
    // this.expense_form.reset()
    this.expense_form.controls['cash'].reset()
    this.expense_form.controls['Expense_Type'].reset()
    this.expense_form.controls['Deposit'].reset()
    this.expense_form.controls['Today_Sale'].reset()
    this.expense_form.controls['Closeing_Amount'].reset()
    this.expense_form.controls['Expense'].reset()
    this.expense_form.controls['Remarks'].reset()
    this.expense_form.controls['date'].reset()
  }
}

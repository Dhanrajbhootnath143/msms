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
      expense_type:['',Validators.required],
      deposit: ['',],
      today_sale: ['', Validators.required],
      closeing_amount:['', Validators.required],
      expense: ['', Validators.required],
      remarks: ['', Validators.required],
      date:[''],
      admin_id_fk: ['', Validators.required],
    })
    this.expense_form.controls['add_account'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_expense){
      this.actionBtn='update'
      this.expense_form.controls[ 'id'].setValue(this.add_expense.id)
      this.expense_form.controls['expense_type'].setValue(this.add_expense.expense_type)
      this.expense_form.controls[ 'cash'].setValue(this.add_expense.cash)
      this.expense_form.controls[ 'deposit'].setValue(this.add_expense.deposit)
      this.expense_form.controls[ 'today_sale'].setValue(this.add_expense.today_sale)
      this.expense_form.controls[ 'closeing_amount'].setValue(this.add_expense.closeing_amount)
      this.expense_form.controls[ 'expense'].setValue(this.add_expense.expense)
      this.expense_form.controls[ 'remarks'].setValue(this.add_expense.remarks)
      this.expense_form.controls['date'].setValue(this.add_expense.date)
      this.expense_form.controls[ 'admin_id_fk'].setValue(this.add_expense.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.expense_form.value)
    console.log(this.expense_form.get('cash')?.value)
    console.log(this.expense_form.get('expense_type')?.value)
    console.log(this.expense_form.get('deposit')?.value)
    console.log(this.expense_form.get('today_sale')?.value)
    console.log(this.expense_form.get('closeing_amount')?.value)
    console.log(this.expense_form.get('expense')?.value)
    console.log(this.expense_form.get('remarks')?.value)
    console.log(this.expense_form.get('date')?.value)

    const expensedata = new FormData()
    expensedata.append('cash',this.expense_form.get('cash')?.value)
    expensedata.append('expense_type',this.expense_form.get('expense_type')?.value)
    expensedata.append('deposit',this.expense_form.get('deposit')?.value)
    expensedata.append('today_sale',this.expense_form.get('today_sale')?.value)
    expensedata.append('closeing_amount',this.expense_form.get('closeing_amount')?.value)
    expensedata.append('expense',this.expense_form.get('expense')?.value)
    expensedata.append('remarks',this.expense_form.get('remarks')?.value)
    expensedata.append('date',this.expense_form.get('date')?.value)


  }
  add_expense_reset(){
    // this.expense_form.reset()
    // this.expense_form.controls['cash'].reset()
    // this.expense_form.controls['Expense_Type'].reset()
    // this.expense_form.controls['Deposit'].reset()
    // this.expense_form.controls['Today_Sale'].reset()
    // this.expense_form.controls['Closeing_Amount'].reset()
    // this.expense_form.controls['Expense'].reset()
    // this.expense_form.controls['Remarks'].reset()
    // this.expense_form.controls['date'].reset()
  }
}

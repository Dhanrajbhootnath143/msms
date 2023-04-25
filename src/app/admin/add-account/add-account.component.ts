import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';


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
    private service:MsmsService,
    private router:Router,
    private matref: MatDialogRef<AddAccountComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
   }

  ngOnInit(): void {
    this.account_form = this.fb.group({
      account_id: [''],
      cash: ['', Validators.required],
      deposit: ['',],
      today_sale: ['', Validators.required],
      closeing_amount:['', Validators.required],
      expense:['', Validators.required],
      date:['',Validators.required],
      remarks:[''],
      admin_id_fk: ['', Validators.required],
    })
    this.account_form.controls['add_account'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_account){
      this.actionBtn='update'
      this.account_form.controls['id'].setValue(this.add_account.id)
      this.account_form.controls['cash'].setValue(this.add_account.cash)
      this.account_form.controls['deposit'].setValue(this.add_account.Deposit)
      this.account_form.controls['today_sale'].setValue(this.add_account.today_sale)
      this.account_form.controls['closeing_amount'].setValue(this.add_account.Closeing_Amount)
      this.account_form.controls['expense'].setValue(this.add_account.expense)
      this.account_form.controls['remarks'].setValue(this.add_account.remarks)
      this.account_form.controls['admin_id_fk'].setValue(this.add_account.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.account_form.value)
    if (!this.add_account) {
      this.service .account_post(this.account_form.value).subscribe(
        (res:any)=>{
          this.router.navigate(['/home/account']);
          console.log(res);
          this.matref.close();
          alert('Data insert succssefully')
        },
        (error:any)=>{
          alert('Data not insert...')
        }
      )
    }

  //  const accountdata = new FormData()
  //  accountdata.append('cash',this.account_form.get('cash')?.value)
  //  accountdata.append('deposit',this.account_form.get('deposit')?.value)
  //  accountdata.append('today_sale',this.account_form.get('today_sale')?.value)
  //  accountdata.append('closeing_amount',this.account_form.get('closeing_amount')?.value)
  //  accountdata.append('expense',this.account_form.get('expense')?.value)
  //  accountdata.append('date',this.account_form.get('date')?.value)
  //  accountdata.append('remarks',this.account_form.get('remarks')?.value)
  }
  add_account_reset(){
    this.account_form.reset()
    // this.account_form.controls['cash'].reset()
    // this.account_form.controls['Deposit'].reset()
    // this.account_form.controls['Today_Sale'].reset()
    // this.account_form.controls['Closeing_Amount'].reset()
    // this.account_form.controls['Expense'].reset()
    // this.account_form.controls['date'].reset()
    // this.account_form.controls['Remarks'].reset()

  }
}
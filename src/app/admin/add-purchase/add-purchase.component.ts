import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MsmsService } from 'src/app/msms.service';
import { UserData } from '../account/account.component';
import { formatDate } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface PeriodicElement {
  item_name: string;
  pack: string;
  company: string;
  quantity: number;
  rate: number;
  discount: number;
  action: string;
  gst: number;
  net_rete: number;
  amount: number;

}


@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  displayedColumns: string[] = ['pur_des_id', 'item_id_fk', 'pack', 'company_name', 'product_quantity', 'net_rate', 'discount_amount', 'gst_amount', 'purch_rate', 'desc_total_amount', 'action'];
  dataSource!: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_form: any;
  purch_item_form: any;
  final_form: any;
  party_data: any
  category_data: any;
  item_data: any;
  gst_data: any;
  purch_party_bill_no: string = '0'
  add_purchase: any;
  item_purch_dat: any;
  action_btn: any;
  purch_id: any;
  party_single_data: any;
  draf_bill: any

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servies: MsmsService,

  ) {
    this.draf_bill = this.router.getCurrentNavigation()?.extras
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }

  }



  ngOnInit(): void {
    this.servies.get_putch_item().subscribe(
      (item_purch_dat: any) => {
        this.dataSource = new MatTableDataSource(item_purch_dat.data);
        this.item_purch_dat = item_purch_dat.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
    this.party_form = this.fb.group({
      party_id: ['', Validators.required],
      mobile_number: ['', Validators.required],
      email_id: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['1',],
      purch_party_bill_no: [''],
      purch_date: [new Date().toISOString().slice(0, 10),],
    })

    this.purch_item_form = this.fb.group({
      pur_des_id: ['', Validators.required],
      purch_id_fk: ['1'],
      cat_id_fk: ['', Validators.required],
      item_id_fk: ['', Validators.required],
      party_name: [''],
      company_name: ['', Validators.required],
      hsn_no: ['', Validators.required],
      batch_no: ['', Validators.required],
      unit_id_fk: ['', Validators.required],
      mrp: ['', Validators.required],
      pack: ['', Validators.required],
      rate: ['', Validators.required],
      date: ['', Validators.required],
      product_quantity: ['', Validators.required],
      purch_rate: ['', Validators.required],
      fee: ['', Validators.required],
      discount_amount: ['', Validators.required],
      gst_amount: ['', Validators.required],
      net_rate: ['', Validators.required],
      desc_total_amount: ['', Validators.required],
      admin_id_fk: ['1'],
    })
    this.final_form = this.fb.group({
      basic_amount: ['', Validators.required],
      discount: ['', Validators.required],
      gst: ['', Validators.required],
      sgst: ['', Validators.required],
      ro: ['', Validators.required],
      net_amount: ['', Validators.required],
      bill_number: ['', Validators.required],
      date: ['', Validators.required],
    })
//view
    if(this.draf_bill){
      console.log(this.draf_bill)
      this.party_form.get('party_id')?.setValue(this.draf_bill.party_id_fk)
      this.purch_party_bill_no = this.draf_bill.purch_party_bill_no
      this.party_form.get('mobile_number')?.setValue(this.draf_bill.mobile)
      this.party_form.get('email_id')?.setValue(this.draf_bill.email_id)
      this.party_form.get('address')?.setValue(this.draf_bill.address)
      this.purch_item_form.get('party_name')?.setValue(this.draf_bill.party_name)

    }
    this.servies.get_Party().subscribe(
      (res: any) => {
        this.party_data = res.data
      }
    )


    this.servies.get_item().subscribe(
      (res: any) => {
        this.item_data = res.data
      }
    )

    this.servies.get_gst().subscribe(
      (res: any) => {
        this.gst_data = res.data
      }
    )

  }


  onGetgst(event: any) {
    this.servies.get_gst_by_id(event).subscribe(
      (res: any) => {
        console.log(res)
        this.purch_item_form.get('gst_id')?.setValue(res.data.gst_id)
      }
    )
    console.log(event)
  }

  onGetitem(event: any) {
    console.log(event)
    this.servies.get_item_by_id(event).subscribe(
      (res: any) => {
        console.log(res)
        this.purch_item_form.get('company_name')?.setValue(res.data.company)
        this.purch_item_form.get('hsn_no')?.setValue(res.data.hsn_no)
        this.purch_item_form.get('unit_id_fk')?.setValue(res.data.unit_id_fk)
        this.purch_item_form.get('mrp')?.setValue(res.data.mrp)
        this.purch_item_form.get('pack')?.setValue(res.data.pack)
        this.purch_item_form.get('rate')?.setValue(res.data.rate)
        this.purch_item_form.get('batch_no')?.setValue(res.data.batch_no)
        this.purch_item_form.get('pur_des_id')?.setValue(res.data.party_name)
      }
    )
  }



  onGetcat(event: any) {
    console.log(event)
    this.servies.get_item_by_id(event).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }


  onGetParty(event: any) {
    this.servies.get_party_by_id(event).subscribe(
      (res: any) => {
        console.log(res)
        this.party_form.get('party_id')?.setValue(res.data.party_id)
        this.party_form.get('mobile_number')?.setValue(res.data.mobile)
        this.party_form.get('email_id')?.setValue(res.data.email_id)
        this.party_form.get('address')?.setValue(res.data.address)
        this.purch_item_form.get('party_name')?.setValue(res.data.party_name)
      }
    )
    console.log(event)
  }


  onInsert() {
    this.servies.get_Party().subscribe(
      (dk: any) => {
        const bill = dk.data.length + 1
        this.party_form.get('purch_party_bill_no')?.setValue("SK" + formatDate(new Date(), 'yyyyMMdd', 'en') + bill)
        this.purch_party_bill_no = ("SK" + formatDate(new Date(), 'yyyyMMdd', 'en')) + bill
        if (dk.sucess = 1) {
          if (!this.add_purchase) {
            this.servies.purchase_party_post(this.party_form.value).subscribe(
              (res: any) => {
                console.log(res);
                alert('Data insert succssefully')
              }
            )
          }
        }
      }
    )


  }


  onInsert_Item() {
    console.log(this.purch_item_form.value)
    if (!this.add_purchase) {
      this.servies.purch_item_post(this.purch_item_form.value).subscribe(
        (res: any) => {
          console.log(res);
          alert('Data insert succssefully')
        },
        (error: any) => {
          alert('Data not insert...')
        }
      )
    }
  }

  purch_party_update() {
    console.log()
    const fromdata = new FormData()
    fromdata.append('purch_id', this.party_single_data.purch_id)
    fromdata.append('purch_party_bill_no', this.purch_party_bill_no)
    this.servies.purch_party_update(fromdata).subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

  onsubm() {
    console.log(this.purch_item_form.value)

  }

  onsubmi() {
    console.log(this.final_form.value)

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.item_purch_dat = this.dataSource.filteredData.length

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
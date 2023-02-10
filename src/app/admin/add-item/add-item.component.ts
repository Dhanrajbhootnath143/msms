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
  itemfrom!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_item: any;
  item_form: any;

  constructor(
  
  ) { }

  ngOnInit(): void {
  }
}
    

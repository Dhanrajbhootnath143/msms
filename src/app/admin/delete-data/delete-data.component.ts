import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matref: MatDialogRef<DeleteDataComponent>

  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(){
    this.matref.close()
  }
}
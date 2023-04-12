import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(){
    alert('okky')
  }

}

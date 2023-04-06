import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddEditPartyComponent } from '../add-edit-party/add-edit-party.component';
import { MsmsService } from 'src/app/msms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  displayedColumns: string[] = ['party_id','party_name','mobile','address','contact_person','action'];
  dataSource = new MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_data:any

  constructor(
    private dailog: MatDialog,
    private service:MsmsService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.service.get_Party().subscribe(
      (party_data : any) => {
        this.dataSource = new MatTableDataSource(party_data.data);
        this.party_data = party_data.data.length
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator
      }
    )
  }

  party_edit(row: any) {
    this.dailog.open(AddEditPartyComponent, {
      data: row,
    });
  }

  add_party() {
    this.dailog.open(AddEditPartyComponent, {
      disableClose: true
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete_party(row:any){
    if(confirm('Do you really want to remove it?')){
      const  deleteparty = new FormData();
      deleteparty.append('party_id',row.party_id),
      this.service.party_delete(deleteparty).subscribe(
        (res:any) => {
          this.route.navigate(['/home/party']);
        }
      )
    }
  }
 
}


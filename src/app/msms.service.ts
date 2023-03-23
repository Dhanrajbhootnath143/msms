import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsmsService {

  constructor(
    private http: HttpClient
  ) {}
  // unit(data:any){
  //   return this.http.post<any>(this.baseUrl + 'unit_insert.php',data);

  // }

}

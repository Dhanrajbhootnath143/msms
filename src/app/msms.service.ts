import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsmsService {
  purch_desc_insert(productfrom: FormData) {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http: HttpClient
  ) {}

  baseUrl: string = 'http://localhost/api/';

  unit_post(data:any){
    return this.http.post<any>(this.baseUrl + 'unit_insert.php',data);
  }
  unit_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_unit.php',data);
  }
  get_unit(){
    return this.http.get<any>(this.baseUrl + 'unit_view.php');
  }
  get_unit_by_id(unit_id:any){
    return this.http.get<any>(this.baseUrl + 'unit_view.php?unit_id='+unit_id);
  }
  
  
  put_unit(data:any){
    return this.http.put<any>(this.baseUrl + 'unit_update.php',data);
  }


  dues_post(data:any){
    return this.http.post<any>(this.baseUrl + 'dues_insert.php',data);
  }
  put_dues(data:any){
    return this.http.put<any>(this.baseUrl + 'dues_update.php',data);
  }
  get_dues(){
    return this.http.get<any>(this.baseUrl + 'duse_view.php');
  }
  dues_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_dues.php',data);
  }


  gst_post(data:any){
    return this.http.post<any>(this.baseUrl + 'gst_insert.php',data);
  }

  gst_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_gst.php',data);
  }
  get_gst(){
    return this.http.get<any>(this.baseUrl + 'gst_view.php');
  }
  get_gst_by_id(gst_id:any){
    return this.http.get<any>(this.baseUrl + 'gst_view.php?gst_id='+gst_id);
  }
  put_gst(data:any){
    return this.http.put<any>(this.baseUrl + 'gst_update.php',data);
  }
  // for party

  party_post(data:any){
    return this.http.post<any>(this.baseUrl + 'party_insert_1.php',data);
  }

  get_Party(){
    return this.http.get<any>(this.baseUrl + 'party_view.php');
  }
  get_party_by_id(party_id:any){
    return this.http.get<any>(this.baseUrl + 'party_view.php?party_id='+party_id);
  }
 

  put_party(data:any){
    return this.http.put<any>(this.baseUrl + 'party_update.php',data);
  }
  
  party_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_party.php',data);
  }


    
  weight_post(data:any){
    return this.http.post<any>(this.baseUrl + 'weight_insert.php',data);
  }
  
  get_weight(){
    return this.http.get<any>(this.baseUrl + 'weight_view.php');
  }

  put_weight(data:any){
    return this.http.put<any>(this.baseUrl + 'weight_update.php',data);
  }
  
  weight_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_weight.php',data);
  }


  category_post(data:any){
    return this.http.post<any>(this.baseUrl + 'category_insert.php',data);
  }
   
  get_category(){
    return this.http.get<any>(this.baseUrl + 'category_view.php');
  }
  get_category_by_id(cat_id:any){
    return this.http.get<any>(this.baseUrl + 'category_view.php?cat_id='+cat_id);
  }
  put_category(data:any){
    return this.http.put<any>(this.baseUrl + 'category_update.php',data);
  }
  
  category_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_category.php',data);
  }
  


  item_post(data:any){
    return this.http.post<any>(this.baseUrl + 'item_insert.php',data);
  }
  get_item(){
    return this.http.get<any>(this.baseUrl + 'item_view.php');
  }
  get_item_by_id(item_id:any){
    return this.http.get<any>(this.baseUrl + 'item_view.php?item_id='+item_id);
  }
  put_item(data:any){
    return this.http.put<any>(this.baseUrl + 'item_update.php',data);
  }
  item_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_item.php',data);
  }
  
  
  

  customer_post(data:any){
    return this.http.post<any>(this.baseUrl + 'customer_insert.php',data);
  }
  customer_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_customer.php',data);
  }
  get_customer(){
    return this.http.get<any>(this.baseUrl + 'customer_view.php');
  }
  put_customer(data:any){
    return this.http.put<any>(this.baseUrl + 'customer_update.php',data);
  }


  employee_post(data:any){
    return this.http.post<any>(this.baseUrl + 'employee_insert.php',data);

  }
  
  employee_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_employee.php',data);
  }
  get_employee(){
    return this.http.get<any>(this.baseUrl + 'employee_view.php');

  }
  put_employee(data:any){
    return this.http.post<any>(this.baseUrl + 'employee_update.php',data);
  }


  account_post(data:any){
    return this.http.post<any>(this.baseUrl + 'account_insert.php',data);
  }
  get_account(){
    return this.http.get<any>(this.baseUrl + 'account_view.php');
  }
  account_delete(data:any){
    return this.http.post<any>(this.baseUrl + 'delete_account.php',data);
  }
  

  sale_party_post(data:any){
    return this.http.post<any>(this.baseUrl + 'sale_insert.php',data);

  }
  get_sale(){
    return this.http.get<any>(this.baseUrl + 'sale_view.php');

  }
  get_cust_by_id(cust_id:any){
    return this.http.get<any>(this.baseUrl + 'customer_view.php?cust_id='+cust_id);
  }
  sale_item_post(data:any){
    return this.http.post<any>(this.baseUrl + 'sale_item_insert.php',data);

  }
  purchase_party_post(data:any){
    return this.http.post<any>(this.baseUrl + 'purch_party_insert.php',data);

  }
  get_purch(){
    return this.http.get<any>(this.baseUrl + 'purch_party_view.php');

  }

  purch_item_post(data:any){
    return this.http.post<any>(this.baseUrl + 'purch_desc_insert.php',data);

  }
  get_putch_item(){
    return this.http.get<any>(this.baseUrl + 'purch_desc_view.php');

  }
  purch_party_update(data:any){
    return this.http.post<any>(this.baseUrl + 'purch_party_update.php',data);

}
  get_purch_view(){ 
    return this.http.get<any>(this.baseUrl  + 'purch_desc_party_view.php')

  }



}


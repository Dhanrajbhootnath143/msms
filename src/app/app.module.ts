import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { HomeComponent } from './login/home/home.component';
import { SidebarComponent } from './login/sidebar/sidebar.component';
import { PartyComponent } from './admin/party/party.component';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { UnitComponent } from './admin/unit/unit.component';
import { AddUnitComponent } from './admin/add-unit/add-unit.component';
import { GstComponent } from './admin/gst/gst.component';
import { AddGstComponent } from './admin/add-gst/add-gst.component';
import { WeightComponent } from './admin/weight/weight.component';
import { AddWeightComponent } from './admin/add-weight/add-weight.component';
import { CategoryComponent } from './admin/category/category.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddItemComponent } from './admin/add-item/add-item.component';
import { ItemComponent } from './admin/item/item.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';
import { AddPurchaseComponent } from './admin/add-purchase/add-purchase.component';
import { DuesComponent } from './admin/dues/dues.component';
import { AddDuesComponent } from './admin/add-dues/add-dues.component';
import { ViewportComponent } from './viewport/viewport.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SaleComponent } from './admin/sale/sale.component';
import { AddSaleComponent } from './admin/add-sale/add-sale.component';
import { RecieptComponent } from './admin/reciept/reciept.component';
import { AccountComponent } from './admin/account/account.component';
import { AddAccountComponent } from './admin/add-account/add-account.component';
import { ExpenseComponent } from './admin/expense/expense.component';
import { AddExpenseComponent } from './admin/add-expense/add-expense.component';
import { PurchaseReportComponent } from './admin/purchase-report/purchase-report.component';
import { SaleReportComponent } from './admin/sale-report/sale-report.component';
import { StockReportComponent } from './admin/stock-report/stock-report.component';
import { ExpiryReportComponent } from './admin/expiry-report/expiry-report.component';
import { PurchaseCancelComponent } from './admin/purchase-cancel/purchase-cancel.component';
import { SaleCancelComponent } from './admin/sale-cancel/sale-cancel.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    PartyComponent,
    AddEditPartyComponent,
    UnitComponent,
    AddUnitComponent,
    GstComponent,
    AddGstComponent,
    WeightComponent,
    AddWeightComponent,
    CategoryComponent,
    AddCategoryComponent,
    AddItemComponent,
    ItemComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    CustomerComponent,
    AddCustomerComponent,
    PurchaseComponent,
    AddPurchaseComponent,
    DuesComponent,
    AddDuesComponent,
    ViewportComponent,
    SaleComponent,
    AddSaleComponent,
    RecieptComponent,
    AccountComponent,
    AddAccountComponent,
    ExpenseComponent,
    AddExpenseComponent,
    PurchaseReportComponent,
    SaleReportComponent,
    StockReportComponent,
    ExpiryReportComponent,
    PurchaseCancelComponent,
    SaleCancelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSelectModule,
    MatSelectModule,
    HttpClientModule,
    NgbModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

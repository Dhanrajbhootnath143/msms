import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './admin/account/account.component';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { AddGstComponent } from './admin/add-gst/add-gst.component';
import { AddPurchaseComponent } from './admin/add-purchase/add-purchase.component';
import { AddSaleComponent } from './admin/add-sale/add-sale.component';
import { AddUnitComponent } from './admin/add-unit/add-unit.component';
import { CategoryComponent } from './admin/category/category.component';
import { CustomerComponent } from './admin/customer/customer.component';
import { DuesComponent } from './admin/dues/dues.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { GstComponent } from './admin/gst/gst.component';
import { ItemComponent } from './admin/item/item.component';
import { PartyComponent } from './admin/party/party.component';
import { PurchaseComponent } from './admin/purchase/purchase.component';
import { RecieptComponent } from './admin/reciept/reciept.component';
import { SaleComponent } from './admin/sale/sale.component';
import { UnitComponent } from './admin/unit/unit.component';
import { WeightComponent } from './admin/weight/weight.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewportComponent } from './viewport/viewport.component';

const routes: Routes = [
  {path:'',component:LoginComponent},

  {
    path:'home',component:HomeComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'party', component:PartyComponent},
      {path:'unit',component:UnitComponent},
      {path:'gst',component:GstComponent},
      {path: 'weight',component:WeightComponent},
      {path:'category',component:CategoryComponent},
      {path:'item',component:ItemComponent},
      {path:'employee',component:EmployeeComponent},
      {path:'customer',component:CustomerComponent},
      {path:'dues',component:DuesComponent},
      {path:'reciept',component:RecieptComponent},
      {path:'account',component:AccountComponent},
      { path:'purchase',component:ViewportComponent,
      children:[
        {path: '', component: PurchaseComponent},
        {path: 'addpurch', component: AddPurchaseComponent}
      ]
    },
    {
      path:'sale',component:ViewportComponent,
      children:[
            {path:'',component:SaleComponent},
            {path:'addsale',component:AddSaleComponent}
      ]
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

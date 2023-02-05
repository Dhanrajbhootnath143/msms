import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { AddGstComponent } from './admin/add-gst/add-gst.component';
import { AddUnitComponent } from './admin/add-unit/add-unit.component';
import { CategoryComponent } from './admin/category/category.component';
import { GstComponent } from './admin/gst/gst.component';
import { PartyComponent } from './admin/party/party.component';
import { UnitComponent } from './admin/unit/unit.component';
import { WeightComponent } from './admin/weight/weight.component';
import { DashboardComponent } from './login/dashboard/dashboard.component';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},

  {
    path:'home',component:HomeComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'',component:AddUnitComponent},
      {path:'', component:AddEditPartyComponent},
      {path:'party', component:PartyComponent},
      {path:'unit',component:UnitComponent},
      {path:'gst',component:GstComponent},
      {path: 'weight',component:WeightComponent},
      {path:'category',component:CategoryComponent}


      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

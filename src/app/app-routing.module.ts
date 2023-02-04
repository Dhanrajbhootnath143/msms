import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditPartyComponent } from './admin/add-edit-party/add-edit-party.component';
import { AddUnitComponent } from './admin/add-unit/add-unit.component';
import { PartyComponent } from './admin/party/party.component';
import { UnitComponent } from './admin/unit/unit.component';
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
      {path:'add-edit-party',component:AddEditPartyComponent},
      {path:'unit',component:UnitComponent},
      {path:'add_unit',component:AddUnitComponent},
      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

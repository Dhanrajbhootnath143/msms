import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './login/home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {
    path:'home',component:HomeComponent,
    children:[

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

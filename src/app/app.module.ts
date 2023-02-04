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
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './users/employee.service';
import { SortnameComponent } from './sortname/sortname.component';
import { EmployeeComponent } from './users/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SortnameComponent,
    EmployeeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

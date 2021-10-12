import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferScanComponent } from './transfer-scan/transfer-scan.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleScanComponent } from './sale-scan/sale-scan.component';
import { DeliverySelectComponent } from './delivery-select/delivery-select.component';
import { DeliveryScanComponent } from './delivery-scan/delivery-scan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanCreateSelectComponent } from './Loan/loan-create-select/loan-create-select.component';

import { MatButtonModule} from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle'



import { NewReceiverComponent } from './Loan/new-receiver/new-receiver.component';
import { ExistingReceiverComponent } from './Loan/existing-receiver/existing-receiver.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent, TransferScanComponent, SaleCreateComponent, SaleScanComponent, DeliverySelectComponent, DeliveryScanComponent, LoanCreateSelectComponent,  NewReceiverComponent, ExistingReceiverComponent, LoginComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule, 
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

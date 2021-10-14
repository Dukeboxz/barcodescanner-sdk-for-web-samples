import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferScanComponent } from './Transfer/transfer-scan/transfer-scan.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleScanComponent } from './sale-scan/sale-scan.component';
import { DeliverySelectComponent } from './delivery-select/delivery-select.component';
import { DeliveryScanComponent } from './delivery-scan/delivery-scan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoanCreateSelectComponent } from './Loan/loan-create-select/loan-create-select.component';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatButtonModule} from '@angular/material/button'; 
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'; 
import { MatSelectModule }from '@angular/material/select'



import { NewReceiverComponent } from './Loan/new-receiver/new-receiver.component';
import { ExistingReceiverComponent } from './Loan/existing-receiver/existing-receiver.component';
import { LoginComponent } from './login/login.component';
import { TransferSelectComponent } from './Transfer/transfer-select/transfer-select.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent, TransferScanComponent, SaleCreateComponent, SaleScanComponent, DeliverySelectComponent, DeliveryScanComponent, LoanCreateSelectComponent,  NewReceiverComponent, ExistingReceiverComponent, LoginComponent, TransferSelectComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule, 
    ReactiveFormsModule, 
    FlexLayoutModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

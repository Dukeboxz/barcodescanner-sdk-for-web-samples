import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { TransferScanComponent } from './transfer-scan/transfer-scan.component';
import { SaleCreateComponent } from './sale-create/sale-create.component';
import { SaleScanComponent } from './sale-scan/sale-scan.component';
import { DeliverySelectComponent } from './delivery-select/delivery-select.component';
import { DeliveryScanComponent } from './delivery-scan/delivery-scan.component';



@NgModule({
  declarations: [AppComponent, DashboardComponent, TransferScanComponent, SaleCreateComponent, SaleScanComponent, DeliverySelectComponent, DeliveryScanComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

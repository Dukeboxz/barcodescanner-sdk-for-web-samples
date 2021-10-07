import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './app/dashboard/dashboard.component';
import { TransferScanComponent } from './app/transfer-scan/transfer-scan.component';
import { SaleCreateComponent } from './app/sale-create/sale-create.component';
import { SaleScanComponent } from './app/sale-scan/sale-scan.component';
import { DeliverySelectComponent } from './app/delivery-select/delivery-select.component';
import { DeliveryScanComponent } from './app/delivery-scan/delivery-scan.component';


const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'transfer', component: TransferScanComponent}, 
  {path: 'saleCreate', component: SaleCreateComponent},
  {path: 'saleScan', component: SaleScanComponent}, 
  {path: 'deliverySelect', component: DeliverySelectComponent},
  {path: 'deliveryScan', component: DeliveryScanComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

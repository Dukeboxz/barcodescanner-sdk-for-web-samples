import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './app/dashboard/dashboard.component';
import { TransferScanComponent } from './app/Transfer/transfer-scan/transfer-scan.component';
import { SaleCreateComponent } from './app/sale-create/sale-create.component';
import { SaleScanComponent } from './app/sale-scan/sale-scan.component';
import { DeliverySelectComponent } from './app/delivery-select/delivery-select.component';
import { DeliveryScanComponent } from './app/delivery-scan/delivery-scan.component';
import { LoanCreateSelectComponent } from './app/Loan/loan-create-select/loan-create-select.component';
import { LoginComponent } from './app/login/login.component';


const routes: Routes =[
  {path: 'dashboard', component: DashboardComponent},
  {path: 'transfer', component: TransferScanComponent}, 
  {path: 'saleCreate', component: SaleCreateComponent},
  {path: 'saleScan', component: SaleScanComponent}, 
  {path: 'deliverySelect', component: DeliverySelectComponent},
  {path: 'deliveryScan', component: DeliveryScanComponent},
  {path: 'loanCreate', component: LoanCreateSelectComponent},
  {path: 'login', component: LoginComponent}, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

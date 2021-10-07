import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as ScanditSDK from "scandit-sdk";
import { BarcodePicker, ScanResult } from "scandit-sdk";
import { DeliveryService } from '../services/delivery.service';
import { Delivery } from '../Interfaces/Delivery';
import { DeliveryItem } from '../Interfaces/DeliveryItem';
import { Subscription } from 'rxjs';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-delivery-scan',
  templateUrl: './delivery-scan.component.html',
  styleUrls: ['./delivery-scan.component.css']
})
export class DeliveryScanComponent implements OnInit {

  
  public scannerReady = false;
  public showButton = false;
  public showDescription = true;
  public UpdateDiabled = true; 
  public result = "";
  currentDelivery: Delivery; 
  
  subscription : Subscription; 
  deliveryItems : DeliveryItem[]; 
  scannedDeliveryItems: DeliveryItem[] = []; 
  scannedSamples: any
  
  constructor(private deliveryService: DeliveryService, private userService: UsersService) { }

  @ViewChild("barcodePicker") barcodePickerElement: ElementRef<HTMLDivElement & { barcodePicker: BarcodePicker }>;

  ngOnInit(): void {

    this.subscription = this.deliveryService.currentDelivery.subscribe(delivery => this.currentDelivery = delivery); 

    this.GetDeliveryItems(this.currentDelivery.BoxId)
    console.log('Boxid :' + this.currentDelivery.BoxId); 
    console.log(this.deliveryItems)


  }

  GetDeliveryItems(boxid: number)
  {
    console.log('Current Delivery in Get Delivery Items')
      console.log(this.currentDelivery)
      this.deliveryService.GetDeliveryItemByBoxId(this.currentDelivery.BoxId)
      .subscribe(delItems => {
        console.log("in subscribe")
        console.log(delItems)
        this.deliveryItems = delItems.DeliveryItems
      })

       

      
  }

  ngOnDestroy() : void {

    this.subscription.unsubscribe(); 


  }
  
  public onReady(): void {
    this.scannerReady = true;
    this.showButton = true;
  }

  public onScan(scanResult: { detail: ScanResult }): void {
    const calculatedString = scanResult.detail.barcodes.reduce((result, barcode) => {
      return `${barcode.data}`;
    }, "");


    console.log("in Scan"); 
    console.log(calculatedString); 
   
    var scannedItem: DeliveryItem = this.deliveryItems.find(x=> x.Barcode== calculatedString); 
    if(!scannedItem){
      alert("Barcode not in delivery");
    }

    var alreadyScanned = this.scannedDeliveryItems.find(y=> y.DeliveryItemID == scannedItem.DeliveryItemID)
    console.log("passed scan items");
    if(alreadyScanned){

      if(alreadyScanned.AcceptQty + scannedItem.AcceptQty > alreadyScanned.DespatchQty){

        return alert("Accepted Qty cannot exceed desptched qty")
      }else{
        alreadyScanned.AcceptQty += 1; 
      }


    }else{

      this.scannedDeliveryItems.push(scannedItem); 
      this.UpdateDiabled = false; 
      scannedItem.AcceptQty += 1;
    }
   
  }



  public scanTest(): void
  {

    console.log("scan Test"); 
    const testBarcodes = ['5059674184900', '5059674185006', '5059674185600', '5059674186652']; 

    const calculatedString = testBarcodes[Math.floor(Math.random() * (4 -1)) + 1]
    console.log('Calculated string : ' + calculatedString); 
    if(!this.deliveryItems){
      console.log(this.deliveryItems); 
      console.log("delivery items not anything"); 
      return; 
    }else{
      console.log("deliveryites not false")
    }
   
    var scannedItem: DeliveryItem = this.deliveryItems.find(x=> x.Barcode== calculatedString); 
    var alreadyScanned = this.scannedDeliveryItems.find(y=> y.DeliveryItemID == scannedItem.DeliveryItemID)

    if(alreadyScanned){

      if(alreadyScanned.AcceptQty + scannedItem.AcceptQty > alreadyScanned.DespatchQty){

        return alert("Accepted Qty cannot exceed desptched qty")
      }else{
        alreadyScanned.AcceptQty += 1; 
      }


    }else{
      scannedItem.AcceptQty += 1;
      this.scannedDeliveryItems.push(scannedItem);
      this.UpdateDiabled = false;  
    }

  }


  public startBarcodePicker(): void {
    this.showButton = false;
    this.showDescription = false;

    this.barcodePickerElement.nativeElement.barcodePicker.setVisible(true).resumeScanning();
  }

  UpdateDelivery(){

    const user = this.userService.GetCurrentUserId(); 
    console.log("Current Delivery : " , this.currentDelivery); 
    console.log("delivery loc id: " + this.currentDelivery.LocationId)
    
    


    this.deliveryService.UpdateDeliveryItemsReceived(this.scannedDeliveryItems, this.currentDelivery.LocationId.toString(), user )
    .subscribe({
      next: res => {
        console.log(res); 
        return alert("deliveryUpdated"); 
        
      },
      error: error =>{
        console.log(error);
        return alert("Error"); 
      }

    })

  }

  

}

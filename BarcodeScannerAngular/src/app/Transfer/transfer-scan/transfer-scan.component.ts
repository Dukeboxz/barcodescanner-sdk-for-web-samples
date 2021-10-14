import { Component, ViewChild, ElementRef , OnInit, Input} from "@angular/core";
import * as ScanditSDK from "scandit-sdk";
import { BarcodePicker, ScanResult } from "scandit-sdk";

import { Sample } from "../../Interfaces/Sample";
import { SamplesService } from "../../services/samples.service";
import { Location } from "src/app/Interfaces/Location";
import { Transfer } from "src/app/Interfaces/Transfer";
import { TransferService } from "src/app/services/transfer.service";
import { UsersService } from "src/app/services/users.service"


@Component({

  selector: 'app-transfer-scan',
  templateUrl: './transfer-scan.component.html',
  styleUrls: ['./transfer-scan.component.css']
})
export class TransferScanComponent implements OnInit {

  constructor(private sampleService: SamplesService, private transferService : TransferService, private userService: UsersService) { }
 
  @Input() toLocation: Location; 
  public scannerReady = false;
  public showButton = false;
  public showDescription = true;
  public result = "";
  public SamplesForLocation : Sample[]; 
  public scannedSamples: Sample[]; 
  public locationID = sessionStorage.getItem('locationId'); 
  public createdTransfer: Transfer

  ngOnInit(): void {
    
    this.GetSamplesForLocation(); 
  }

  GetSamplesForLocation(): void
  {
    this.sampleService.GetSamplesForLocation(+this.locationID)
    .subscribe(samps => this.SamplesForLocation = samps.Samples)
  }

  @ViewChild("barcodePicker") barcodePickerElement: ElementRef<HTMLDivElement & { barcodePicker: BarcodePicker }>;

  public onReady(): void {
    this.scannerReady = true;
    this.showButton = true;
  }

  CreateTransfer(){

    this.createdTransfer.FromLocationId = +this.locationID; 
    this.createdTransfer.ToLocationId = +this.toLocation;
    this.createdTransfer.ScannerGeneratedId = this.transferService.CreateScannerId("Trn");
    this.createdTransfer.CreatedBy = this.userService.GetCurrentUserId(); 
    this.createdTransfer.Samples = this.scannedSamples; 

    this.transferService.CreateTransfer(this.createdTransfer)
    .subscribe({
      next: res => {
        this.scannedSamples = [];
        return alert(" Transfer Created"); 
        
      },
      error: error =>{
        console.log(error);
        return alert("Error"); 
      }
    })


  }

  public onScan(scanResult: { detail: ScanResult }): void {
    const calculatedString = scanResult.detail.barcodes.reduce((result, barcode) => {
      return `${result} ${ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology)} : ${barcode.data}`;
    }, "");

    this.result = calculatedString;
    console.log("calculated string is " + calculatedString)
    console.log(this.SamplesForLocation); 
    
    let alreadyScanned = this.scannedSamples.find(b=> b.Barcode === this.result); 
    if( alreadyScanned === undefined || alreadyScanned === null){

    
       

    }else{
      
      alreadyScanned.Qty += 1;
      

    }
  }

  public startBarcodePicker(): void {
    this.showButton = false;
    this.showDescription = false;

    this.barcodePickerElement.nativeElement.barcodePicker.setVisible(true).resumeScanning();
  }

}

import { Component, ViewChild, ElementRef , OnInit, Input} from "@angular/core";
import * as ScanditSDK from "scandit-sdk";
import { BarcodePicker, ScanResult } from "scandit-sdk";

import { Sample } from "../../Interfaces/Sample";
import { SamplesService } from "../../services/samples.service";
import { Location } from "src/app/Interfaces/Location";

@Component({
  selector: 'app-transfer-scan',
  templateUrl: './transfer-scan.component.html',
  styleUrls: ['./transfer-scan.component.css']
})
export class TransferScanComponent implements OnInit {

  constructor(private sampleService: SamplesService) { }
 
  @Input() toLocation: Location; 
  public scannerReady = false;
  public showButton = false;
  public showDescription = true;
  public result = "";
  public SamplesForLocation : Sample[]; 
  public scannedSamples: Sample[]; 
  public locationID = sessionStorage.getItem('locationId'); 

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

  public onScan(scanResult: { detail: ScanResult }): void {
    const calculatedString = scanResult.detail.barcodes.reduce((result, barcode) => {
      return `${result} ${ScanditSDK.Barcode.Symbology.toHumanizedName(barcode.symbology)} : ${barcode.data}`;
    }, "");

    this.result = calculatedString;
    console.log("calculated string is " + calculatedString)
    console.log(this.SamplesForLocation); 
    let scannedSample= this.SamplesForLocation.find(e=> e.Barcode == this.result); 
    if(!scannedSample){

      return alert("Sample not show at location");
    }
    let alreadyScanned = this.scannedSamples.find(b=> b.Barcode === this.result); 
    if( alreadyScanned === undefined || alreadyScanned === null){

      let newScannedSample = {...scannedSample}; 
      newScannedSample.Qty = 1;
      this.scannedSamples.push(newScannedSample); 
      scannedSample.Qty = scannedSample.Qty - 1; 

    }else{
      alreadyScanned.Qty = alreadyScanned.Qty + 1; 
      scannedSample.Qty = scannedSample.Qty - 1; 

    }
  }

  public startBarcodePicker(): void {
    this.showButton = false;
    this.showDescription = false;

    this.barcodePickerElement.nativeElement.barcodePicker.setVisible(true).resumeScanning();
  }

}

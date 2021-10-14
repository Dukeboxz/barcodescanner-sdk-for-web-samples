import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/location.service';
import { Location } from 'src/app/Interfaces/Location';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-transfer-select',
  templateUrl: './transfer-select.component.html',
  styleUrls: ['./transfer-select.component.css']
})
export class TransferSelectComponent implements OnInit {

  showScan: boolean = false; 
  ShowSpinner: boolean = false; 
  public locations: Location[]; 
  public returnObject: any; 
  fromLocationId: string = sessionStorage.getItem('locationId'); 
  FromLocation: Location

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
  }

  GetLocations(): void
  {
    console.log('In Get Locations');
    this.locationService.GetAllLocations()
    .subscribe(locs => {this.locations = locs; 
      
      console.log("This is locs")
      this.returnObject=locs; 
      console.log(this.returnObject)
      console.log(locs)
      this.locations = locs.Locations;
      this.RemoveUserLocFromSelection(); 
    })
     
  }

  RemoveUserLocFromSelection(){

    this.locations = this.locations.filter(x=> {return x.LocationId != +this.fromLocationId})
    console.log(this.locations); 
  }

  OnLocationSelect(locationId){

    this.FromLocation = this.locations.find(x=> x.LocationId == locationId)

     //Todo:
     //Send location to child
  }

}

import { Component, OnInit } from '@angular/core';

import { LocationService } from 'src/location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public locations: Location[]; 
  public selectedLocationID: string; 
  public buttonsDisabled = false; 
  public returnObject: any; 

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    console.log('In Dashboad INIT')
    //this.GetLocations(); 
    
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
    })
     
  }

  OnLocationSelect(locationId: string)
  {
    this.selectedLocationID = locationId; 
    sessionStorage.setItem('locationId', this.selectedLocationID)
    this.buttonsDisabled = false; 
  }

}

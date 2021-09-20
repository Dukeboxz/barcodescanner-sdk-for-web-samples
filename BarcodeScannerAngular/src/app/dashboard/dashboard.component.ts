import { Component, OnInit } from '@angular/core';

import { LocationService } from 'src/location.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public locations: Location[]; 

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {

    console.log('In Dashboad INIT')
    this.GetLocations(); 
    
  }

  GetLocations(): void
  {
    console.log('In Get Locations');
    this.locationService.GetAllLocations()
    .subscribe(locs => {this.locations = locs; 
      console.log( this.locations.length)
      console.log(locs)})
  }

}

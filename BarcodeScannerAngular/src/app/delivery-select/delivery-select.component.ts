import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { Delivery } from '../Interfaces/Delivery';
import { DeliveryService } from '../services/delivery.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-delivery-select',
  templateUrl: './delivery-select.component.html',
  styleUrls: ['./delivery-select.component.css']
})
export class DeliverySelectComponent implements OnInit {

  public locationID = "-1"; 
  public deliveries : Delivery[]; 
  AcceptedDelivery: Delivery; 
  
  constructor( private activatedRoute: ActivatedRoute,private router: Router, private delvieryService: DeliveryService, private userService: UsersService) { }

  ngOnInit(): void {

    console.log("in delivery ngonit")
    this.locationID = sessionStorage.getItem('locationId');
    console.log("Location Id=" + this.locationID)
     this.delvieryService.GetDeliveriesForLocation(Number.parseInt(this.locationID))
     .subscribe(rtrn => {
      console.log(rtrn)
      this.deliveries = rtrn.Deliveries; 
      console.log(this.deliveries)
     })

     
  }

  SelectDelivery(delivery:Delivery)
  {
    console.log('selected delivery');
      console.log(delivery)
      this.delvieryService.ChangeCurrentDelivery(delivery); 
      
      this.router.navigate(['/deliveryScan']);
      
  }

  AcceptDelivery(delivery:Delivery)
  {
    this.AcceptedDelivery = delivery; 
      const user = this.userService.GetCurrentUserId(); 

      this.delvieryService.AcceptAllOfADelivery(delivery, this.locationID, user)
      .subscribe({
        next: res =>{
          console.log(res);
         
              alert("Delivery Updated");
             
            location.reload();
      }, 
      error: error=> {
        console.log(error);
        
        alert("Error")
      }
      
      })
  }

}

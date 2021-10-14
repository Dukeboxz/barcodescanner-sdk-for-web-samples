import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Delivery } from '../Interfaces/Delivery';
import  {DeliveryItem} from '../Interfaces/DeliveryItem'
import { DeliveryReturn } from '../Interfaces/DeliveryReturn';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  DeliveriesUrl = 'https://srvapi01.pslan.net:8085/' ; 

  private currentDeliverySource = new BehaviorSubject<Delivery>(null); 
  currentDelivery = this.currentDeliverySource.asObservable(); 

  constructor(private http: HttpClient) { }

  

  GetDeliveriesForLocation(LocationId: number): Observable<any>
  {
    const options = {
      params: new HttpParams().set('locationId', LocationId)
    }

    return this.http.get<any>(this.DeliveriesUrl + 'Delivery/', options)
    .pipe(catchError(error=>{
      return throwError(()=> new Error("Failed To Get Deliveries"))
    }))
  }

  ChangeCurrentDelivery(newDelivery: Delivery){
    console.log("Change current delivery"); 
    console.log("new delivery: ", newDelivery)
    this.currentDeliverySource.next(newDelivery)
    console.log("after set new delivery")
  }

  GetDeliveryItemByBoxId(boxid: number){

    const options = {
      params: new HttpParams().set('boxID', boxid)
    }

    return this.http.get<any>(this.DeliveriesUrl + 'deliveryItems', options)
    .pipe(catchError(error=>{
      return throwError(()=> new Error("Failed To Get Deliveries"))
    }))
  }

  AcceptAllOfADelivery(delivery: Delivery, locationID: string, user: string){

    const deliverySelect = {
      'BoxId': delivery.BoxId, 
      'Location': locationID,
      'User' : user
    };

    const body = JSON.stringify(deliverySelect); 
    const headers = { 'content-type': 'application/json'}
    console.log(body)

    return this.http.post<any>(this.DeliveriesUrl + 'Delivery/', body,{'headers':headers})
    .pipe(catchError(error=>{
      console.log(error)
      return throwError(()=> new Error("Failed To Get Deliveries"))
    }))
  }

  UpdateDeliveryItemsReceived(DeliveryItems: DeliveryItem[], LocationId: string, user: string): Observable<any>
  {
    console.log("Delivery Items"); 
    console.log(DeliveryItems);

    const retObj: DeliveryReturn ={
        acceptedItems: DeliveryItems, 
        location: LocationId, 
        user: user
    }
    var body = JSON.stringify(retObj); 
    const headers = { 'content-type': 'application/json'}  
    

    return this.http.post<any>(this.DeliveriesUrl + 'DeliveryItems/', body,{'headers':headers})
    .pipe(catchError(error=>{
      console.log(error);
      return throwError(()=> new Error("Failed To Get Deliveries"))
    }))

  }

 
}

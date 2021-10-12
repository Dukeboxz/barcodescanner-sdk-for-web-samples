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

  DeliveriesUrl = 'http://srvapi01.pslan.net:8085/' ; 

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

    this.currentDeliverySource.next(newDelivery)
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

    

    const options = {
      params: [
        new HttpParams().set('boxId', delivery.BoxId), 
        new HttpParams().set('location', locationID),
        new HttpParams().set('user', user)
       ]
    }

    return this.http.patch<any>(this.DeliveriesUrl + 'Delivery/', options)
    .pipe(catchError(error=>{
      return throwError(()=> new Error("Failed To Get Deliveries"))
    }))
  }

  UpdateDeliveryItemsReceived(DeliveryItems: DeliveryItem[], LocationId: string, user: string): Observable<any>
  {

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

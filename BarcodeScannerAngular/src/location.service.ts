import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  GetLocationsUrl = 'https://pssamples-transfers.azurewebsites.net/api/GetAllLocations?code=A6A77QyKGGGEaewbJj4Qvk6qMWpONv2ef7v9CSY/LC9pZxKUuYTLBQ=='

  constructor( private http: HttpClient) { }

  GetAllLocations(): Observable<Location[]>{
    console.log('In Get All locations service')
    return this.http.get<Location[]>(this.GetLocationsUrl)
    .pipe(catchError(error=>{
      console.log('caught error'); 
      return throwError(() => new Error("Failed To Get Locations"))}))
  }

}

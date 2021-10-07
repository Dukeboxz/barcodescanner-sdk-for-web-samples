import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  GetLocationsUrl = 'https://localhost:44330/Location'

  constructor( private http: HttpClient) { }

  GetAllLocations(): Observable<any>{
    console.log('In Get All locations service')
    return this.http.get<Location[]>(this.GetLocationsUrl)
    .pipe(catchError(error=>{
      console.log('caught error'); 
      return throwError(() => new Error("Failed To Get Locations"))}))
  }

}

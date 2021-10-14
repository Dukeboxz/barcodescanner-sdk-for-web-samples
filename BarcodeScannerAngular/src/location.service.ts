import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

   GetLocationsUrl =  'https://srvapi01.pslan.net:8085/Location' 

  constructor( private http: HttpClient) { }

  


  GetAllLocations(): Observable<any>{
    console.log('In Get All locations service')

    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.http.get<Location[]>(this.GetLocationsUrl, {'headers': headers})
    .pipe(catchError(error=>{
      console.log('caught error');
      console.log(error) ;
      return throwError(() => new Error("Failed To Get Locations"))}))
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Sample } from '../Interfaces/Sample';

@Injectable({
  providedIn: 'root'
})
export class SamplesService {

  GetSamplesUrl = 'https://psgetsamplesfromlocation.azurewebsites.net/api/SampleFromBarcode?code=NmjRvGf1Dd3j3SH9raqw3a3GCkiQnKOgvx0g7krTwTd1mb9YJLQRfA=='; 
  
  constructor( private http: HttpClient) { }

  GetSamplesForLocation(LocationId: number): Observable<any>{

    const options = {
      params: new HttpParams().set('locationId', LocationId)
    }
    return this.http.get<any>(this.GetSamplesUrl, options)
    .pipe(catchError(error=>{
      console.log('caught error'); 
      return throwError(() => new Error("Failed To Get Samples"))}))
  }
}

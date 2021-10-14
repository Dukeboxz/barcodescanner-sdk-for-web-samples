import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transfer } from '../Interfaces/Transfer';
import { catchError, Observable, throwError } from 'rxjs';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transferUrl = 'https://srvapi01.pslan.net:8085/'; 
  constructor(private http: HttpClient) { }
  


  CreateScannerId(sendType: string): string
  {
    let max = 100000
    let RandomNumber = Math.floor(Math.random() * (max + 1) ); 

    return sendType + RandomNumber; 
  }

  CreateTransfer(transfer: Transfer): Observable<boolean>
  {
    const body = JSON.stringify(transfer); 
    const headers = { 'content-type': 'application/json'}
    console.log(body)

    return this.http.post<any>(this.transferUrl + 'Transfer/', body,{'headers':headers})
    .pipe(catchError(error=>{
      console.log(error)
      return error
    }))
  }

}

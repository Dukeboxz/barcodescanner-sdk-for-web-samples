import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanReceiver } from '../Interfaces/LoanReceiver';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  loanUrl: string = "'https://localhost:44330/'"; 
  private loanReceiverSource = new BehaviorSubject<LoanReceiver>(null); 
  currentLoanReceiver = this.loanReceiverSource.asObservable(); 
  constructor(private http: HttpClient) { }

  UpdateCurrentLoanReceiver(newReceiver: LoanReceiver){

    this.loanReceiverSource.next(newReceiver); 
  }

  CreateNewReceiver(newReceiver: LoanReceiver): Observable<LoanReceiver>
  {

    let body = JSON.stringify(newReceiver); 
    const headers = { 'content-type': 'application/json'} 


    return this.http.post<LoanReceiver>(this.loanUrl + 'LoanReceiver', body ,{'headers':headers} )
    .pipe(catchError(error=>{
      return throwError(()=> new Error("Failed To Get Loan Receivers"))
    }))
  }
}

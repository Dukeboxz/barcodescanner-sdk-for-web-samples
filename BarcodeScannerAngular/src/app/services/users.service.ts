import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  authUserUrl ='https://pssamples-transfers.azurewebsites.net/api/ValidateUser?code=JZWyv7DBR9Mw1nM0o4guzkoXrBoqMZaBcMUvvq8yhbMm3cKviO5nOw=='; 

  constructor(private http: HttpClient) { }

  ValidateUser(user: User) : Observable<any>{

    return this.http.post<User>(this.authUserUrl, user )
    .pipe(catchError(error=>{
      
      return throwError(() => new Error(error))}))
  }

  HandleError(error : HttpErrorResponse) {
    console.log(error);
  }

  GetCurrentUserId(): string{
    let userstring = sessionStorage.getItem('user'); 
    console.log( userstring)
    let user = JSON.parse(  sessionStorage.getItem('user')) ;
    console.log("user object"); 
    console.log(user); 

    return user.userName; 
  }
}

import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import {Observable,throwError} from 'rxjs';
import { catchError ,map} from 'rxjs/operators';
import { InvokeFunctionExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  //Nodejs API link
 REST_API:string = "http://localhost:8000/api";
 //Set Http Headers
 httpHeaders = new HttpHeaders().set('Content-Type','application/json')
  constructor(private httpClient:HttpClient) { }

//add records

AddBook(data:Book):Observable<any>{
  let API_URL = `${this.REST_API}/add-book`;
  return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
}

//get all books details
getBooks()
{
return this.httpClient.get(`${this.REST_API}`);
}
//get Single Book
getBook(id:any) :Observable<any>{
  let API_URL = `${this.REST_API}/read-book/${id}`;
  return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
    return res || {}
  }),
  catchError(this.handleError)
  )
}

//Update Book data

updateBook(id:any ,data:any):Observable<any>{
  let API_URL = `${this.REST_API}/update-book/${id}`;
  return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
}
//Delete Book Data
deleteBook(id:any):Observable<any>{
  let API_URL = `${this.REST_API}/delete-book/${id}`;
  return this.httpClient.delete(API_URL,{headers:this.httpHeaders}).pipe(catchError(this.handleError))
}

//Error
handleError(error:HttpErrorResponse){
  let errorMessage = '';
  if (error.error instanceof ErrorEvent){
    //Handle Client side error
    errorMessage = error.error.message;
  }else{
    //Handle server side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}
}

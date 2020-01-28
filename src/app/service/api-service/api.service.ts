import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL: string = 'http://localhost:4000/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) {}

  // GET
  public get(path: string): Observable<T[]> {
    return this.http.get<T[]>(`${BASE_URL}${path}`);
  }

  // POST
  public add(data: T, path: string): Observable<T> {
    return this.http.post<T>(`${BASE_URL}${path}`, data)
    .pipe(
      catchError(this.handleError)
    );
  }

  // DELETE :id
  public deleteById(id: string, path: string): Observable<any> {
    return this.http.delete(`${BASE_URL}${path}/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  // Error handling 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

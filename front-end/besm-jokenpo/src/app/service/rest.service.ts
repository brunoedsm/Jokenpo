import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://127.0.0.1:5000/api/';
const httpOptions = {
  headers: new HttpHeaders({  
    'Content-Type': 'application/json',
    'Accept': 'application/json' 
  })
};

@Injectable()
  
  export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
  // # region Play Game
  getWeapons(): Observable<any> {
    return this.http.get(endpoint + 'match/weapons',httpOptions).pipe(
      map(this.extractData));
  }

  sendChoices(playersweapons): Observable<any> {

    return this.http.post<any>(endpoint + 'match/choices', JSON.stringify(playersweapons), httpOptions).pipe(
      tap((player) => console.log(`send to results`)),
      catchError(this.handleError<any>('send to results'))
    );
  }
  // #end region
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      alert(error.message);      
      return;
    };
  }
}
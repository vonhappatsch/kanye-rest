import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IQuote } from './quote-generator/quote.model';

@Injectable({
  providedIn: 'root'
})

export class QuoteGeneratorService {

  constructor(private http: HttpClient) { }

  private readonly API = "https://api.kanye.rest/";

  private handleError<T>(operation = 'operation', result?: T) {
    return  (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  };

  private toQuote(data: any): IQuote {
    return {
      quote: data.quote
    }
  };

  public getQuote(): Observable<IQuote> {
    return this.http.get(this.API).pipe(
      map(data => this.toQuote(data)),
      catchError(this.handleError<IQuote>(`getQuote`))
    )
  };
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './app.config';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class wizarddata {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = appConfig.apiEndpoint;
  }

  getWizardData() {
    return this.http.get(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching wizard data:', error);
        // Continue to throw the error, but don't change the original data
        return throwError(() => error);
      })
    );
  }
}

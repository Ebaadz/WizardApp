import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class wizarddata {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = appConfig.apiEndpoint;
  }

  getWizardData() {
    return this.http.get(this.apiUrl);
  }
}

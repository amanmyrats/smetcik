import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCurrency } from '../models/base-currency.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCurrencyService {
  public readonly endPoint: string = '/api/v1/basecurrencies/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCurrencies(queryParams?: string): Observable<Paginated<BaseCurrency>> {
    return this.httpClient.get<Paginated<BaseCurrency>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCurrency(id: string): Observable<BaseCurrency> {
    return this.httpClient.get<BaseCurrency>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCurrency(baseCurrency: BaseCurrency): Observable<BaseCurrency> {
    return this.httpClient.post<BaseCurrency>(`${env.apiUrl}${this.endPoint}`, baseCurrency);
  }

  updateBaseCurrency(id: string, baseCurrency: BaseCurrency): Observable<BaseCurrency> {
    return this.httpClient.put<BaseCurrency>(`${env.apiUrl}${this.endPoint}${id}/`, baseCurrency);
  }

  deleteBaseCurrency(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }
  
  exportToExcel(queryParams?: string): Observable<Blob> {
    return this.httpClient.get(`${env.apiUrl}${this.endPoint}exporttoexcel/`, {
      responseType: 'blob'
    });
  }

  importFromExcel(formData: FormData): Observable<any> {
    return this.httpClient.post(`${env.apiUrl}${this.endPoint}importfromexcel/`, formData);
  }

}
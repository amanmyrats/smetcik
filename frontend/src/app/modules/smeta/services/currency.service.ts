import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { Currency } from '../../common/models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  public readonly endPoint: string = '/api/v1/currencies/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCurrencies(queryParams?: string): Observable<Paginated<Currency>> {
    if (queryParams){
    return this.httpClient.get<Paginated<Currency>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
    } else {
      return this.httpClient.get<Paginated<Currency>>(`${env.apiUrl}${this.endPoint}`);
    }
  }

  getCurrency(id: string): Observable<Currency> {
    return this.httpClient.get<Currency>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createCurrency(currency: Currency): Observable<Currency> {
    return this.httpClient.post<Currency>(`${env.apiUrl}${this.endPoint}`, currency);
  }

  updateCurrency(id: string, currency: Currency): Observable<Currency> {
    return this.httpClient.put<Currency>(`${env.apiUrl}${this.endPoint}${id}/`, currency);
  }

  deleteCurrency(id: string): Observable<any> {
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
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Paginated } from 'src/app/models/paginated.model';
import { BaseCompanyCurrency } from '../models/base-company-currency.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyCurrencyService {
  public readonly endPoint: string = '/api/v1/basecompanycurrencies/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCompanyCurrencies(queryParams?: string): Observable<Paginated<BaseCompanyCurrency>> {
    return this.httpClient.get<Paginated<BaseCompanyCurrency>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCompanyCurrency(id: string): Observable<BaseCompanyCurrency> {
    return this.httpClient.get<BaseCompanyCurrency>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyCurrency(baseCompanyCurrency: BaseCompanyCurrency): Observable<BaseCompanyCurrency> {
    return this.httpClient.post<BaseCompanyCurrency>(`${env.apiUrl}${this.endPoint}`, baseCompanyCurrency);
  }

  updateBaseCompanyCurrency(id: string, baseCompanyCurrency: BaseCompanyCurrency): Observable<BaseCompanyCurrency> {
    return this.httpClient.put<BaseCompanyCurrency>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyCurrency);
  }

  deleteBaseCompanyCurrency(id: string): Observable<any> {
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
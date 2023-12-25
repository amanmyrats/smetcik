import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseCompanyTrade } from '../models/base-company-trade.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyTradeService  {

  public readonly endPoint: string = '/api/v1/basecompanytrades/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseCompanyTrades(): Observable<BaseCompanyTrade[]> {
    return this.httpClient.get<BaseCompanyTrade[]>(`${env.apiUrl}${this.endPoint}`);
  }

  getBaseCompanyTrade(id: string): Observable<BaseCompanyTrade> {
    return this.httpClient.get<BaseCompanyTrade>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyTrade(baseCompanyTrade: BaseCompanyTrade): Observable<BaseCompanyTrade> {
    return this.httpClient.post<BaseCompanyTrade>(`${env.apiUrl}${this.endPoint}`, baseCompanyTrade);
  }

  updateBaseCompanyTrade(id: string, baseCompanyTrade: BaseCompanyTrade): Observable<BaseCompanyTrade> {
    return this.httpClient.put<BaseCompanyTrade>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyTrade);
  }

  deleteBaseCompanyTrade(id: string): Observable<any> {
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

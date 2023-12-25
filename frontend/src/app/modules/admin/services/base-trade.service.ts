import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseTrade } from '../models/base-trade.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class BaseTradeService  {

  public readonly endPoint: string = '/api/v1/basetrades/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseTrades(queryParams?: string): Observable<Paginated<BaseTrade>> {
    return this.httpClient.get<Paginated<BaseTrade>>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseTrade(id: string): Observable<BaseTrade> {
    return this.httpClient.get<BaseTrade>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseTrade(baseTrade: BaseTrade): Observable<BaseTrade> {
    return this.httpClient.post<BaseTrade>(`${env.apiUrl}${this.endPoint}`, baseTrade);
  }

  updateBaseTrade(id: string, baseTrade: BaseTrade): Observable<BaseTrade> {
    return this.httpClient.put<BaseTrade>(`${env.apiUrl}${this.endPoint}${id}/`, baseTrade);
  }

  deleteBaseTrade(id: string): Observable<any> {
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

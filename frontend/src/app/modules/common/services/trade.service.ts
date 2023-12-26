import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Trade } from '../models/trade.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  public readonly endPoint: string = '/api/v1/trades/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTrades(queryParams?: string): Observable<Paginated<Trade>> {
    return this.httpClient.get<Paginated<Trade>>(`${env.apiUrl}${this.endPoint}`);
  }

  getTrade(id: string): Observable<Trade> {
    return this.httpClient.get<Trade>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createTrade(trade: Trade): Observable<Trade> {
    return this.httpClient.post<Trade>(`${env.apiUrl}${this.endPoint}`, trade);
  }

  updateTrade(id: string, trade: Trade): Observable<Trade> {
    return this.httpClient.put<Trade>(`${env.apiUrl}${this.endPoint}${id}/`, trade);
  }

  deleteTrade(id: string): Observable<any> {
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

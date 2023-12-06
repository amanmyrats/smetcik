import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Trade } from '../models/trade.model';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  public readonly endPoint: string = '/api/v1/trades/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTrades(): Observable<Trade[]> {
    return this.httpClient.get<Trade[]>(`${env.apiUrl}${this.endPoint}`);
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
}

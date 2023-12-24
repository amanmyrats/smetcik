import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseTrade } from '../models/base-trade.model';

@Injectable({
  providedIn: 'root'
})
export class BaseTradeService  {

  public readonly endPoint: string = '/api/v1/basetrades/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getTrades(): Observable<BaseTrade[]> {
    return this.httpClient.get<BaseTrade[]>(`${env.apiUrl}${this.endPoint}`);
  }

  getTrade(id: string): Observable<BaseTrade> {
    return this.httpClient.get<BaseTrade>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createTrade(baseTrade: BaseTrade): Observable<BaseTrade> {
    return this.httpClient.post<BaseTrade>(`${env.apiUrl}${this.endPoint}`, baseTrade);
  }

  updateTrade(id: string, baseTrade: BaseTrade): Observable<BaseTrade> {
    return this.httpClient.put<BaseTrade>(`${env.apiUrl}${this.endPoint}${id}/`, baseTrade);
  }

  deleteTrade(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }
}

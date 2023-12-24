import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseLot } from '../models/base-lot.model';

@Injectable({
  providedIn: 'root'
})
export class BaseLotService {
  public readonly endPoint: string = '/api/v1/baselots/'

  constructor(
    private httpClient: HttpClient,
  ) { }

  getBaseLots(): Observable<BaseLot[]> {
    return this.httpClient.get<BaseLot[]>(`${env.apiUrl}${this.endPoint}`);
  }

  getBaseLot(id: string): Observable<BaseLot> {
    return this.httpClient.get<BaseLot>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseLot(baseLot: BaseLot): Observable<BaseLot> {
    return this.httpClient.post<BaseLot>(`${env.apiUrl}${this.endPoint}`, baseLot);
  }

  updateBaseLot(id: string, baseLot: BaseLot): Observable<BaseLot> {
    return this.httpClient.put<BaseLot>(`${env.apiUrl}${this.endPoint}${id}/`, baseLot);
  }

  deleteBaseLot(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseConsumption } from '../models/base-consumption.model';

@Injectable({
  providedIn: 'root'
})
export class BaseConsumptionService {

  public readonly endPoint = '/api/v1/baseconsumptions/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getBaseConsumptions(queryParams: string): Observable<BaseConsumption[]> {
    return this.httpClient.get<BaseConsumption[]>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseConsumption(id: string): Observable<BaseConsumption> {
    return this.httpClient.get<BaseConsumption>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseConsumption(baseConsumption: BaseConsumption): Observable<BaseConsumption> {
    return this.httpClient.post<BaseConsumption>(`${env.apiUrl}${this.endPoint}`, baseConsumption);
  }

  updateBaseConsumption(id: string, baseConsumption: BaseConsumption): Observable<BaseConsumption> {
    return this.httpClient.put<BaseConsumption>(`${env.apiUrl}${this.endPoint}${id}/`, baseConsumption);
  }

  deleteBaseConsumption(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${env.apiUrl}${this.endPoint}${id}/`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Consumption } from '../models/consumption.model';
import { Paginated } from 'src/app/models/paginated.model';

@Injectable({
  providedIn: 'root'
})
export class ConsumptionService {

  public readonly endPoint = '/api/v1/consumptions/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getConsumptions(queryParams: string): Observable<Paginated<Consumption>> {
    if (queryParams) {
      return this.httpClient.get<Paginated<Consumption>>(`${env.apiUrl}${this.endPoint}${queryParams}`);
    } else {
      return this.httpClient.get<Paginated<Consumption>>(`${env.apiUrl}${this.endPoint}`);
    }
  }

  getConsumption(id: string): Observable<Consumption> {
    return this.httpClient.get<Consumption>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createConsumption(consumption: Consumption): Observable<Consumption> {
    return this.httpClient.post<Consumption>(`${env.apiUrl}${this.endPoint}`, consumption);
  }

  updateConsumption(id: string, consumption: Consumption): Observable<Consumption> {
    return this.httpClient.put<Consumption>(`${env.apiUrl}${this.endPoint}${id}/`, consumption);
  }

  deleteConsumption(id: string): Observable<any> {
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


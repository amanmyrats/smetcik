import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { BaseCompanyConsumption } from '../models/base-company-consumption.model';

@Injectable({
  providedIn: 'root'
})
export class BaseCompanyConsumptionService {

  public readonly endPoint = '/api/v1/basecompanyconsumptions/'

  constructor(
    private httpClient: HttpClient
  ) { }

  getBaseCompanyConsumptions(queryParams: string): Observable<BaseCompanyConsumption[]> {
    return this.httpClient.get<BaseCompanyConsumption[]>(`${env.apiUrl}${this.endPoint}?${queryParams}`);
  }

  getBaseCompanyConsumption(id: string): Observable<BaseCompanyConsumption> {
    return this.httpClient.get<BaseCompanyConsumption>(`${env.apiUrl}${this.endPoint}${id}/`);
  }

  createBaseCompanyConsumption(baseCompanyConsumption: BaseCompanyConsumption): Observable<BaseCompanyConsumption> {
    return this.httpClient.post<BaseCompanyConsumption>(`${env.apiUrl}${this.endPoint}`, baseCompanyConsumption);
  }

  updateBaseCompanyConsumption(id: string, baseCompanyConsumption: BaseCompanyConsumption): Observable<BaseCompanyConsumption> {
    return this.httpClient.put<BaseCompanyConsumption>(`${env.apiUrl}${this.endPoint}${id}/`, baseCompanyConsumption);
  }

  deleteBaseCompanyConsumption(id: string): Observable<any> {
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
